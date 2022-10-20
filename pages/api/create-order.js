// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import mongoose from "../../lib/mongoose";
import Order from "../../models/Orders";

const handler = (req, res) => {
  if (req.method === "POST") {
    const { user, products, total } = req.body;
    const order = new Order({
      user,
      products,
      total,
    });
    order.save((err, order) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      res.status(200).json(order);
    });
  }
};

export default mongoose(handler);
