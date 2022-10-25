import React, { useEffect, useState } from "react";
import OrderItem from "./OrderItem";
import { useSelector, useDispatch } from "react-redux";
import { cartProducts, subTotal } from "../../features/cartSlice";
import { shippingDetails } from "../../features/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function OrderSummery() {
  const products = useSelector(cartProducts);
  const cartTotal = useSelector(subTotal);
  let cart = useSelector((state) => state.cart.products);
  let { shippingDetails } = useSelector(
    (state) => state.shipping.shippingDetails
  );

  useEffect(() => {
    setAllProducts(products);
  }, [products, shippingDetails]);

  const [allProducts, setAllProducts] = useState(cart);

  const placeOrder = async () => {
    if (
      shippingDetails.firstName.length < 2 ||
      shippingDetails.lastName.length < 2 ||
      shippingDetails.email.length < 2 ||
      shippingDetails.city.length < 2 ||
      shippingDetails.state.length < 1 ||
      shippingDetails.street.length < 1 ||
      shippingDetails.pinCode.length < 2
    ) {
      toast.warning("Please enter all fields ");
      return;
    } else if (allProducts.length === 0) {
      toast.warning("Please add some products!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    const response = await fetch("http://localhost:3000/api/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        products: allProducts,
        shippingDetails: shippingDetails,
      }),
    });
    const data = await response.json();
    console.log(data);
    if (response.status === 200) {
      toast.success(`Order Placed Successfully. Ticket ID: ${data}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("Something went wrong", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className=" p-2 bg-gray-100 rounded-xl">
      <ToastContainer />
      <div className="text-xl font-semibold my-2 md:text-2xl ">Your Order</div>

      <div className="border-b-2 border-yellow-400" />
      <div className="mt-3">
        {Object.keys(allProducts).map((product, index) => {
          return (
            <OrderItem
              key={index}
              id={allProducts[product].id}
              title={allProducts[product].title}
              quantity={allProducts[product].quantity}
              slug={allProducts[product].slug}
              price={allProducts[product].price * allProducts[product].quantity}
            />
          );
        })}
      </div>
      <div className="flex justify-between p-4">
        <div>Cart Subtotal</div>
        <div className="font-semibold">₹{cartTotal}</div>
      </div>
      <div className="flex justify-between px-4">
        <div>Shipping</div>
        <div className="font-semibold">₹200</div>
      </div>
      <div className="border-b-2 border-gray-200 mt-3" />
      <div className="flex justify-between p-4">
        <div className="font-semibold ">Order Total</div>
        <div className="font-semibold text-2xl">₹{cartTotal + 200}</div>
      </div>
      <div className="p-2">
        <button
          className="bg-yellow-400 font-bold rounded-full p-3 ml-auto w-full"
          onClick={placeOrder}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default OrderSummery;
