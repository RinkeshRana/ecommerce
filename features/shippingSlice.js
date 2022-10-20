import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shippingDetails: {
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    street: "",
    state: "",
    pinCode: "",
  },
};

export const shippingSlice = createSlice({
  name: "shipping",
  initialState,
  reducers: {
    updateDetails: (state, action) => {
      state.shippingDetails = action.payload;
    },
  },
});

export const { updateDetails } = shippingSlice.actions;
export default shippingSlice.reducer;
export const { shippingDetails } = (state) => state.shipping.shippingDetails;
