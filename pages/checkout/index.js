import React from "react";
import Address from "../../components/checkout/Address";
import OrderSummery from "../../components/checkout/OrderSummery";

function index() {
  return (
    <div>
      <div className="md:flex md:justify-center">
        <div className="md:w-3/4 lg:w-3/5 flex">
          <div className="md:flex justify-center md:mt-7">
            <Address />
            <div className="p-4 md:w-1/2">
              <OrderSummery />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
