// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import mongoose from "../../lib/mongoose";
import Order from "../../models/Orders";

const handler = (req, res) => {
  if (req.method === "POST") {
    const { products, shippingDetails } = req.body;
    console.log(req.body);
    const order = new Order({
      products: products.products,
      title: products.title,
      slug: products.slug,
      id: products.id,
      firstName: shippingDetails.firstName,
      lastName: shippingDetails.lastName,
      email: shippingDetails.email,
      city: shippingDetails.city,
      state: shippingDetails.state,
      street: shippingDetails.street,
      pincode: shippingDetails.pinCode,
      orderTicket: `BB_${Date.now().toString().slice(5, 10)}`,
    });
    order.save((err, order) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      res.status(200).json(order.orderTicket);
    });
  }
};

export default mongoose(handler);
