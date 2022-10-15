import React from "react";
import Cart from "../../components/cart/Cart";
import Subtotal from "../../components/cart/Subtotal";

function index() {
  return (
    <div className="min-h-screen p-2">
      <div>
        <Cart />
      </div>
      <div>
        <Subtotal />
      </div>
    </div>
  );
}

export default index;
