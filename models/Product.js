import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: String,
  slug: String,
  description: String,
  price: Number,
  image: String,
  category: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

mongoose.models = {};

module.exports =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);
