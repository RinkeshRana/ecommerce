import React from "react";

function Address() {
  return (
    <div className="p-2 text-sm md:text-lg md:w-1/2">
      <div className="text-xl font-semibold my-2 md:text-2xl">
        Shipping Address
      </div>
      <div className="border-b-2 border-yellow-400" />

      <div className="flex mt-2">
        <div className="">
          <div className="flex space-x-2 ">
            <div className=" w-1/2">
              <span className="font-semibold">First Name</span>
              <input className="checkoutInput" placeholder="First Name" />
            </div>
            <div className="w-1/2">
              <span className="font-semibold">Last Name</span>
              <input className="checkoutInput" placeholder="Last Name" />
            </div>
          </div>
          <span className="font-semibold">Email Address</span>
          <input className="checkoutInput" placeholder="Email Address" />
          <span className="font-semibold">City</span>
          <input className="checkoutInput" placeholder="City" />
          <span className="font-semibold">State</span>

          <input className="checkoutInput" placeholder="State" />
          <span className="font-semibold">Street Address</span>

          <input
            type="textarea"
            className="checkoutInput"
            placeholder="Street Address"
          />
          <span className="font-semibold">Pincode</span>

          <input className="checkoutInput" placeholder="Pincode" />
        </div>
      </div>
    </div>
  );
}

export default Address;
