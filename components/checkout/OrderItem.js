import React from "react";

function OrderItem() {
  return (
    <div className="p-2 border-b-2 border-gray-200 flex font-semibold text-sm md:text-md">
      <div>100x</div>
      <div className="flex-1 ml-2 text-blue-600 ">
        OLED 3D Virtual Reality TV Video
      </div>
      <div className="mt-auto">₹1999</div>
    </div>
  );
}

export default OrderItem;
