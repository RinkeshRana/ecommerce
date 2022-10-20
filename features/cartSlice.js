import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index === -1) {
        state.products.push(action.payload);
      } else {
        state.products[index].quantity += 1;
      }
    },
    removeFromCart: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state.products[index].quantity -= 1;
        if (state.products[index].quantity === 0) {
          state.products.splice(index, 1);
        }
      }
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, remove } = cartSlice.actions;
export const cartProducts = (state) => state.cart.products;
export const cartTotal = (state) => state.cart.products.length;
export const subTotal = (state) =>
  state.cart.products.reduce((prevValue, product) => {
    return product.price * product.quantity + prevValue;
  }, 0);

export default cartSlice.reducer;
