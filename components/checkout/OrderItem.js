import { useRouter } from "next/router";
import React from "react";

function OrderItem({ title, quantity, slug, price }) {
  const router = useRouter();
  return (
    <div className="p-2 border-b-2 border-gray-200 flex font-semibold text-sm md:text-md">
      <div>{quantity}x</div>
      <div
        className="flex-1 ml-2 text-blue-600 cursor-pointer"
        onClick={() => {
          router.push(`/product/${slug}`);
        }}
      >
        {title}
      </div>
      <div className="mt-auto">₹{price}</div>
    </div>
  );
}

export default OrderItem;
