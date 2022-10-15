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
        console.log(state.products);
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

      // let newCart = [...state.products];

      // if (index >= 0) {
      //   newCart.splice(index, 1);
      // } else {
      //   console.warn("Item not found in basket");
      //   console.log(index);
      // }
      // state.products = newCart;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, remove } = cartSlice.actions;
export const cartProducts = (state) => state.cart.products;

export default cartSlice.reducer;
