import path from "path";
import { promises as fs } from "fs";
import mongoose from "../../lib/mongoose";
import Product from "../../models/Product";

// export default async function handler(req, res) {
//   const jsonDirectory = path.join(process.cwd(), "json");
//   const fileContents = await fs.readFile(
//     jsonDirectory + "/products.json",
//     "utf-8"
//   );
//   if (req.query.limit) {
//     const products = JSON.parse(fileContents).slice(0, req.query.limit);
//     res.status(200).json(products);
//   } else if (req.query.from) {
//     const products = JSON.parse(fileContents).slice(
//       req.query.from,
//       req.query.to
//     );
//     res.status(200).json(products);
//   } else if (req.query.slug) {
//     const products = JSON.parse(fileContents).find(
//       (product) => product.slug === req.query.slug
//     );
//     res.status(200).json(products);
//   } else if (req.query.search) {
//     let products = [];
//     for (let product of JSON.parse(fileContents)) {
//       if (
//         product.title.toLowerCase().includes(req.query.search.toLowerCase())
//       ) {
//         products.push(product);
//       }
//     }
//     res.status(200).json(products);
//   }

//   res.status(200).json(JSON.parse(fileContents));
// }

const handler = async (req, res) => {
  const products = await Product.find({});
  if (req.query.limit) {
    const filterdProducts = products.slice(0, req.query.limit);
    res.status(200).json(filterdProducts);
  } else if (req.query.from) {
    const filterdProducts = products.slice(req.query.from, req.query.to);
    res.status(200).json(filterdProducts);
  } else if (req.query.slug) {
    const filterdProducts = products.find(
      (product) => product.slug === req.query.slug
    );
    res.status(200).json(filterdProducts);
  } else if (req.query.search) {
    let filterdProducts = [];
    for (let product of products) {
      if (
        product.title.toLowerCase().includes(req.query.search.toLowerCase())
      ) {
        filterdProducts.push(product);
      }
    }
    res.status(200).json(filterdProducts);
  } else {
    res.status(200).json(products);
  }
};
export default mongoose(handler);
