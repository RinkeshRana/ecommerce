import React from "react";
import { BsTruck } from "react-icons/bs";
import { FiThumbsUp, FiRefreshCcw } from "react-icons/fi";
import { MdOutlinePayments, MdOutlineLocalOffer } from "react-icons/md";

function FeaturesSection() {
  return (
    <div className="hidden lg:block">
      <div className="flex justify-center p-4 ">
        <div className="flex items-center space-x-4 justify-center border rounded-md">
          <div className="flex items-center space-x-4 border-r py-2 px-4">
            <div>
              <BsTruck className="text-4xl text-yellow-400" />
            </div>
            <div className="text-center">
              <h4 className="font-semibold">Free Delivery</h4>
              <span>From ₹4000</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 border-r py-2 px-4">
            <div>
              <FiThumbsUp className="text-4xl text-yellow-400" />
            </div>
            <div className="text-center">
              <h4 className="font-semibold">99&#37; Customers</h4>
              <span>Feedback</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 border-r py-2 px-4">
            <div>
              <FiRefreshCcw className="text-4xl text-yellow-400" />
            </div>
            <div className="text-center">
              <h4 className="font-semibold">365 Days</h4>
              <span>for free return</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 border-r py-2 px-4">
            <div>
              <MdOutlinePayments className="text-4xl text-yellow-400" />
            </div>
            <div className="text-center">
              <h4 className="font-semibold">Payment</h4>
              <span>Secure System</span>
            </div>
          </div>
          <div className="flex items-center space-x-4  py-2 px-4">
            <div>
              <MdOutlineLocalOffer className="text-4xl text-yellow-400" />
            </div>
            <div className="text-center">
              <h4 className="font-semibold">Only Best</h4>
              <span>Brands</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
