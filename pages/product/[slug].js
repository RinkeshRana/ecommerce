import { useRouter } from "next/router";
import React from "react";
import Hero from "../../components/product/Hero";
import RelatedProduct from "../../components/product/RelatedProduct";

function Product({ data }) {
  return (
    <div className="min-h-screen pt-6">
      <Hero
        id={data.id}
        title={data.title}
        price={data.price}
        description={data.description}
        category={data.category}
        thumbnail={data.thumbnail}
        slug={data.slug}
      />
      <RelatedProduct />
    </div>
  );
}

export default Product;

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const res = await fetch(
    `http://localhost:3000/api/get-products/?slug=${slug}`
  );

  const data = await res.json();
  // console.log(data);
  return {
    props: { data }, // will be passed to the page component as props
  };
}
