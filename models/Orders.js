import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  user: {
    type: String,
    ref: "User",
  },
  products: [
    {
      product: {
        type: String,
        ref: "Product",
      },
      id: String,
      price: Number,
      quantity: Number,
      slug: String,
      title: String,
    },
  ],
  total: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  firstName: String,
  lastName: String,
  email: String,

  city: String,
  state: String,
  street: String,
  pincode: Number,
  orderTicket: String,
});

mongoose.models = {};

module.exports =
  mongoose.models.Product || mongoose.model("Order", OrderSchema);
