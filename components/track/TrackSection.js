import React from "react";
import Brands from "../index/Brands";
import TopProducts from "../index/TopProducts";

function TrackSection() {
  return (
    <div className="pt-4">
      <div className="text-center text-xl mt-9">Track Your Order</div>
      <div className="text-center">
        To track your order please enter your order id in the box below and and
        press the &#8220;Track&#8221;
      </div>
      <div className="flex justify-center space-x-3 mt-24 md:h-32 h-48">
        <div className="md:flex md:justify-center md:space-x-3 space-y-2 md:space-y-0 relative">
          <div>
            <div className="font-bold">Order ID</div>

            <div className="w-80">
              <input
                type="text"
                placeholder="Found in your order confirmation email"
                className="w-full border border-gray-300 rounded-full p-2 focus:outline-none"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">Billing Email</div>

            <div className="w-80">
              <input
                type="text"
                placeholder="Email you used during checkout"
                className="w-full border border-gray-300 rounded-full p-2 focus:outline-none"
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0">
            <button className="bg-yellow-400 py-2 px-10 rounded-full font-bold">
              Track
            </button>
          </div>
        </div>
      </div>
      <div className="mt-9">
        <Brands />
      </div>
      <div className="mt-9">
        <TopProducts />
      </div>
    </div>
  );
}

export default TrackSection;
