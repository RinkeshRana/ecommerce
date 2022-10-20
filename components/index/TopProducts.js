import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function TopProducts() {
  const router = useRouter();
  const getProducts = async () => {
    const res = await fetch(
      "http://localhost:3000/api/get-products?from=17&to=29"
    );
    const products = await res.json();
    setProducts(products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const [products, setProducts] = useState([]);
  // const products = [
  //   {
  //     id: 1,
  //     categority: "Audio Speakers",
  //     title: "Wireless Audio System Multiroom 360",
  //     price: "1990",
  //     image: "/images/TopProducts/1.png",
  //     url: "/headphones-123",
  //     price: "1990",
  //   },
  //   {
  //     id: 2,
  //     categority: "Laptops",
  //     title: "Tablet white EliteBook Revolve 810 G2",
  //     price: "1300",
  //     image: "/images/TopProducts/2.png",
  //     url: "/about",
  //     price: "1300",
  //   },
  //   {
  //     id: 3,
  //     categority: "Headphones",
  //     title: "Purple Solo 2 Wireless",
  //     price: "248",
  //     image: "/images/TopProducts/3.png",
  //     url: "/services",
  //     price: "248",
  //   },
  //   {
  //     id: 4,
  //     categority: "Camera",
  //     title: "Widescreen NX mini F1 aparat SMART NX",
  //     price: "558",
  //     image: "/images/TopProducts/4.png",
  //     price: "558",
  //     url: "/services",
  //   },
  // ];
  return (
    <div className="p-2">
      <div className="md:flex md:justify-center">
        <div className="border-b-2 p-2 border-yellow-400 md:w-3/4 lg:w-3/5 flex">
          <div>
            <h4 className="text-xl font-semibold ">Trending Products</h4>
          </div>
        </div>
      </div>
      <div className="md:flex md:justify-center p-2">
        <div className=" md:w-3/4 lg:w-3/5 flex">
          <div className="flex overflow-y-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-yellow-500/80 p-2">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex w-40 hover:shadow-md cursor-pointer"
                onClick={() => {
                  router.push(`/product/${product.slug}`);
                }}
              >
                <div className="p-2 w-56 h-60 justify-between flex-row ">
                  <div className="">
                    <p className="text-xs text-gray-400">{product.category}</p>
                    <p className="text-sm font-semibold text-blue-600">
                      {product.title}
                    </p>
                  </div>
                  <div className="flex-1">
                    <Image
                      src={product.thumbnail}
                      alt="Image not available"
                      width={200}
                      height={200}
                      loading="lazy"
                    />
                  </div>
                  <div className="flex items-center justify-between self-end">
                    <p className="text-lg">₹{product.price}</p>
                    {/* <AiOutlineShoppingCart className="text-2xl text-yellow-400" /> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopProducts;
