import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../features/cartSlice";
import { cartProducts } from "../../features/cartSlice";

function Cart() {
  const products = useSelector(cartProducts);
  let cart = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const [allProducts, setAllProducts] = useState(cart);

  return (
    <div>
      <h1 className="text-center font-medium md:text-3xl text-xl mt-5">
        Your Shopping cart Summery
      </h1>
      <div className="flex justify-center mt-10">
        <div className="border-b-2 md:w-2/3 w-full" />
      </div>

      <div className="md:flex md:justify-center mt-10">
        <div className="md:w-3/4 lg:w-3/5 ">
          {/* {cart.map((product, index) => (
            <CartItem key={index} title={product.title} img={product.img} />
          ))} */}
          {Object.keys(allProducts).map((product, index) => {
            console.log(allProducts[product]);
            return (
              <CartItem
                key={index}
                id={allProducts[product].id}
                title={allProducts[product].title}
                img={allProducts[product].img}
                quantity={allProducts[product].quantity}
              />
            );
          })}
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="border-b-2 md:w-2/3 w-full" />
      </div>
    </div>
  );
}

export default Cart;
