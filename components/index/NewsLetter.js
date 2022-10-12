import React from "react";
import { TiNews } from "react-icons/ti";
function NewsLetter() {
  return (
    <div className="w-full bg-yellow-400 hidden md:block">
      <div className=" p-4 flex items-center justify-evenly">
        <div className="flex items-center space-x-2">
          <TiNews className="md:text-2xl " />
          <span className="md:text-lg lg:text-2xl text-gray-700 font-pompador text-sm">
            Signup for NewsLetter
          </span>
        </div>
        <div className="text-sm">
          ...and receive{" "}
          <span className="font-semibold ">10% off your first order.</span>
        </div>
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Enter your email"
            className="p-2 border-2 border-gray-400 rounded-l-md"
          />
          <button className="bg-gray-700 text-white p-2 rounded-r-md ">
            Subscribe
          </button>
        </div>
      </div>
      <div className="block md:hidden">
        <input
          type="text"
          placeholder="Enter your email"
          className="p-2 border-2 border-gray-400 rounded-l-md"
        />
        <button className="bg-gray-700 text-white p-2 rounded-r-md block">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default NewsLetter;
