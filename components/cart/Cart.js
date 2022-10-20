import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { cartProducts } from "../../features/cartSlice";

function Cart() {
  const products = useSelector(cartProducts);
  let cart = useSelector((state) => state.cart.products);

  useEffect(() => {
    setAllProducts(products);
  }, [products]);

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
          {Object.keys(allProducts).map((product, index) => {
            return (
              <CartItem
                key={index}
                id={allProducts[product].id}
                title={allProducts[product].title}
                thumbnail={allProducts[product].thumbnail}
                quantity={allProducts[product].quantity}
                slug={allProducts[product].slug}
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
