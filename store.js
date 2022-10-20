import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import shippingReducer from "./features/shippingSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    shipping: shippingReducer,
  },
});
