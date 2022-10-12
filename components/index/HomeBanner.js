import React from "react";
import HomeDropdown from "./HomeDropdown";
import { RiArrowDropDownLine } from "react-icons/ri";
import ScrollingImage from "./ScrollingImage";

function HomeBanner() {
  const links = [
    {
      id: 1,
      title: "TV & Home Theater",
      url: "/",
    },
    {
      id: 2,
      title: "Computers",
      url: "/about",
    },
    {
      id: 3,
      title: "Cell Phones",
      url: "/services",
    },
    {
      id: 4,
      title: "Games & Movies",
      url: "/services",
    },
    {
      id: 5,
      title: "Gadgets",
      url: "/services",
    },
    {
      id: 6,
      title: "Accessories",
      url: "/services",
    },
  ];

  return (
    <div className="pt-3">
      <div className="hidden lg:block">
        <div className="bg-yellow-400 py-3 flex justify-center ">
          {links.map((link) => (
            <HomeDropdown key={link.id} title={link.title} url={link.url} />
          ))}
          <div className="px-6 font-semibold text-sm flex items-center">
            Gps and Car Audio <RiArrowDropDownLine className="text-2xl" />
          </div>
        </div>
      </div>
      <div>
        <ScrollingImage />
      </div>
    </div>
  );
}

export default HomeBanner;
