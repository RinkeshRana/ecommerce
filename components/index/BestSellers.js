import Image from "next/image";
import React from "react";

function BestSellers() {
  const links = [
    {
      id: "1",
      categority: "Tablets",
      title: "Tablet Air 3 Wifi 64GB",
      price: "1990",
      image: "/images/BestSelling/1.png",
      url: "/",
    },
    {
      id: "2",
      categority: "Laptops",
      title: "Laptop Yoga 21 80JH0035GE",
      price: "1300",
      image: "/images/BestSelling/2.png",
      url: "/about",
      price: "1300",
    },
    {
      id: "3",
      categority: "Accessories",
      title: "Pendrive 32GB",
      price: "248",
      image: "/images/BestSelling/3.png",
      url: "/services",
      price: "248",
    },
    {
      id: "4",
      categority: "Smartwatch",
      title: "Smartwatch 2.0 LTE Wifi",
      price: "558",
      image: "/images/BestSelling/4.png",
      price: "558",
      url: "/services",
    },
    {
      id: "5",
      categority: "Gadgets",
      title: "Gear Virtual Reality 3D with Bluetooth",
      price: "558",
      image: "/images/BestSelling/5.png",
      price: "558",
      url: "/services",
    },
    {
      id: "6",
      categority: "Gadgets",
      title: "External SSD USB 3.1 1TB",
      price: "558",
      image: "/images/BestSelling/6.png",
      price: "558",
      url: "/services",
    },
  ];
  return (
    <div>
      <div className="md:flex md:justify-center p-2">
        <div className="border-b-2 p-2 border-yellow-400 md:w-3/4 lg:w-3/5 flex">
          <div>
            <h4 className="text-xl font-semibold ">Best Sellers</h4>
          </div>
        </div>
      </div>
      <div className="md:flex md:justify-center p-2">
        <div className=" md:w-3/4 lg:w-3/5 flex">
          <div className="flex overflow-x-scroll">
            {/* Best Sellers */}
            {links.map((link) => (
              <div key={link.id}>
                <div>
                  <div className="flex w-72 hover:shadow-md">
                    <div className="">
                      <Image
                        src={link.image}
                        alt="Picture of the author"
                        width={200}
                        height={200}
                        loading="lazy"
                      />
                    </div>
                    <div className="p-2 w-56 h-32 justify-between ">
                      <div className="mb-5">
                        <p className="text-xs text-gray-400">
                          {link.categority}
                        </p>
                        <p className="text-sm font-semibold text-blue-600">
                          {link.title}
                        </p>
                      </div>

                      <div className="">
                        <p className="text-lg">₹{link.price}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="mt-2">
                  <div className="flex w-72 hover:shadow-md">
                    <div className="">
                      <Image
                        src={link.image}
                        alt="Image not available"
                        width={200}
                        height={200}
                        loading="lazy"

                      />
                    </div>
                    <div className="p-2 w-56 h-32 justify-between ">
                      <div className="mb-5">
                        <p className="text-xs text-gray-400">
                          {link.categority}
                        </p>
                        <p className="text-sm font-semibold text-blue-600">
                          {link.title}
                        </p>
                      </div>

                      <div className="">
                        <p className="text-lg">₹{link.price}</p>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestSellers;
