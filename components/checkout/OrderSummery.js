import React from "react";
import OrderItem from "./OrderItem";

function OrderSummery() {
  return (
    <div className=" p-2 bg-gray-100 rounded-xl">
      <div className="text-xl font-semibold my-2 md:text-2xl ">Your Order</div>

      <div className="border-b-2 border-yellow-400" />
      <div className="mt-3">
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </div>
      <div className="flex justify-between p-4">
        <div>Cart Subtotal</div>
        <div className="font-semibold">₹2000</div>
      </div>
      <div className="flex justify-between px-4">
        <div>Shipping</div>
        <div className="font-semibold">₹200</div>
      </div>
      <div className="border-b-2 border-gray-200 mt-3" />
      <div className="flex justify-between p-4">
        <div className="font-semibold ">Order Total</div>
        <div className="font-semibold text-2xl">₹7000</div>
      </div>
      <div className="p-2">
        <button className="bg-yellow-400 font-bold rounded-full p-3 ml-auto w-full">
          Place Order
        </button>
      </div>
    </div>
  );
}

export default OrderSummery;
