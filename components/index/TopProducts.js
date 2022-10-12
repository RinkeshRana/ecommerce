import Image from "next/image";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

function TopProducts() {
  const links = [
    {
      id: 1,
      categority: "Audio Speakers",
      title: "Wireless Audio System Multiroom 360",
      price: "1990",
      image: "/images/TopProducts/1.png",
      url: "/",
      price: "1990",
    },
    {
      id: 2,
      categority: "Laptops",
      title: "Tablet white EliteBook Revolve 810 G2",
      price: "1300",
      image: "/images/TopProducts/2.png",
      url: "/about",
      price: "1300",
    },
    {
      id: 3,
      categority: "Headphones",
      title: "Purple Solo 2 Wireless",
      price: "248",
      image: "/images/TopProducts/3.png",
      url: "/services",
      price: "248",
    },
    {
      id: 4,
      categority: "Camera",
      title: "Widescreen NX mini F1 aparat SMART NX",
      price: "558",
      image: "/images/TopProducts/4.png",
      price: "558",
      url: "/services",
    },
  ];
  return (
    <div className="p-2">
      <div className="md:flex md:justify-center">
        <div className="border-b-2 p-2 border-yellow-400 md:w-3/4 lg:w-3/5 flex">
          <div>
            <h4 className="text-xl font-semibold ">Trending Products</h4>
          </div>
        </div>
      </div>
      <div className="flex justify-start md:justify-center  overflow-x-scroll md:overflow-x-hidden p-2 space-x-4">
        {links.map((link) => (
          <div key={link.id} className="flex w-40 hover:shadow-md">
            <div className="p-2 w-56 h-60 justify-between flex-row ">
              <div className="">
                <p className="text-xs text-gray-400">{link.categority}</p>
                <p className="text-sm font-semibold text-blue-600">
                  {link.title}
                </p>
              </div>
              <div className="flex-1">
                <Image
                  src={link.image}
                  alt="Picture of the author"
                  width={200}
                  height={200}
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-between self-end">
                <p className="text-lg">₹{link.price}</p>
                {/* <AiOutlineShoppingCart className="text-2xl text-yellow-400" /> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopProducts;
