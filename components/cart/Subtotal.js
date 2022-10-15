import { useRouter } from "next/router";
import React from "react";

function Subtotal() {
  const router = useRouter();
  return (
    <div>
      <div className="md:flex md:justify-center  mt-5">
        <div className="md:w-3/4 lg:w-3/5 ">
          <div className="">Delivery expected 23 Oct</div>
          <div className="">
            Total <span className="font-semibold">₹4300</span>
          </div>
          <div className="flex mt-3">
            <input
              className="border border-gray-200 rounded-l-full p-2 w-96 focus:outline-none"
              placeholder="Enter Coupon Code"
            />
            <button className="bg-black text-white rounded-r-full p-2 mr-2">
              Apply
            </button>
            <button
              className="bg-yellow-400 text-white rounded-full p-2 ml-auto"
              onClick={() => {
                router.push("/checkout");
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subtotal;
