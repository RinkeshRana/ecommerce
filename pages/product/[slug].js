import { useRouter } from "next/router";
import React from "react";
import Hero from "../../components/product/Hero";
import RelatedProduct from "../../components/product/RelatedProduct";

function Product() {
  return (
    <div className="min-h-screen pt-6">
      <Hero />
      <RelatedProduct />
    </div>
  );
}

export default Product;
