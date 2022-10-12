import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
function BuyCard() {
  return (
    <div className="mt-5  border-2 p-4 rounded-2xl lg:min-w-[300px] mx-auto">
      <div className="border-b-2 border-gray-400">
        Available:
        <span className="text-green-500 font-semibold"> In Stock</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-3xl">₹1990</span>
        <span className="text-sm">EMI Option Available</span>
      </div>
      <div className="m-2 font-semibold">
        Quantity:
        <div className="border border-gray-200 rounded-full w-40 flex justify-between p-1 items-center">
          <span className="ml-3">1</span>
          <div>
            <button className="w-7 h-7 mx-2 bg-gray-200 rounded-full font-bold">
              +
            </button>
            <button className="w-7 h-7  bg-gray-200 rounded-full font-bold">
              -
            </button>
          </div>
        </div>
      </div>
      <div className="m-2 font-semibold">
        Color:
        <select className="rounded-full p-1 focus:outline-none border border-gray-200 w-full">
          <option>Red</option>
          <option>Green</option>
          <option>Blue</option>
          <option>Yellow</option>
        </select>
      </div>

      <div>
        <div className=" p-3">
          <div>
            <button className="p-2 bg-yellow-400 text-white rounded-full w-full flex items-center justify-center space-x-7">
              <MdAddShoppingCart />
              Add to cart
            </button>
          </div>
          <div>
            <button className="p-2 bg-gray-700 text-white rounded-full w-full mt-2">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyCard;
