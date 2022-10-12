import Image from "next/image";
import React from "react";
import BestSellers from "../components/index/BestSellers";
import Brands from "../components/index/Brands";
import FeaturedProduct from "../components/index/FeaturedProduct";
import FeaturesSection from "../components/index/FeaturesSection";
import Footer from "../components/index/Footer";
import HomeBanner from "../components/index/HomeBanner";
import NewsLetter from "../components/index/NewsLetter";
import ScrollingImage from "../components/index/ScrollingImage";
import TopProducts from "../components/index/TopProducts";
import Navbar from "../components/Navbar";

function index() {
  return (
    <div>
      <navbar>
        <Navbar />
      </navbar>
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
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default index;
