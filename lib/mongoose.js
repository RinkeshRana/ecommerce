import mongoose from "mongoose";

const connectDB = (handler) => (req, res) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }

  mongoose.connect(process.env.MONGODB_URI);
  return handler(req, res);
};

export default connectDB;
