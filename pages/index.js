import React from "react";
import BestSellers from "../components/index/BestSellers";
import Brands from "../components/index/Brands";
import FeaturedProduct from "../components/index/FeaturedProduct";
import FeaturesSection from "../components/index/FeaturesSection";
import HomeBanner from "../components/index/HomeBanner";
import NewsLetter from "../components/index/NewsLetter";
import TopProducts from "../components/index/TopProducts";

function index() {
  return (
    <div>
      <section>
        <HomeBanner />
      </section>
      <section>
        <FeaturesSection />
      </section>
      <section>
        <FeaturedProduct />
      </section>
      <section>
        <TopProducts />
      </section>
      <section>
        <BestSellers />
      </section>
      <section>
        <Brands />
      </section>
      <section>
        <NewsLetter />
      </section>
    </div>
  );
}

export default index;
