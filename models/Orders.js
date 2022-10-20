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
      quantity: Number,
      price: Number,
    },
  ],
  total: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

mongoose.models = {};

module.exports =
  mongoose.models.Product || mongoose.model("Order", OrderSchema);
