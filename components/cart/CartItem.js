import Image from "next/image";
import React from "react";
import { addToCart, removeFromCart } from "../../features/cartSlice";
import { useSelector, useDispatch } from "react-redux";

function CartItem({ title, img, quantity, id }) {
  const dispatch = useDispatch();
  const decreaseQuantity = () => {
    dispatch(removeFromCart({ id }));
  };
  const increaseQuantity = () => {
    dispatch(addToCart({ id }));
  };
  return (
    <div className="p-2">
      <div className="flex items-center w-full">
        <div className="relative w-20 h-20 hidden md:block">
          <Image
            src={"/images/TopProducts/2.png"}
            layout="fill"
            alt="Image not avaialable"
            loading="lazy"
          />
        </div>
        <div className="md:ml-6 flex w-2/3">
          <div>
            <h2 className="md:text-xl font-semibold">{title}</h2>
          </div>
        </div>
        <div className="m-2 font-semibold ml-auto">
          Quantity:
          <div className="border border-gray-200 rounded-full w-32 flex justify-evenly p-1 items-center">
            <span className="ml-3">{quantity}</span>
            <div>
              <button
                className="w-7 h-7 mx-2 bg-gray-200 rounded-full font-bold"
                onClick={increaseQuantity}
              >
                +
              </button>
              <button
                className="w-7 h-7  bg-gray-200 rounded-full font-bold"
                onClick={decreaseQuantity}
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
