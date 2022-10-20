import Image from "next/image";
import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import BuyCard from "./BuyCard";

function Hero({ id, title, slug, price, thumbnail, category, description }) {
  return (
    <div className="p-2 flex justify-center ">
      <div className="md:flex lg:space-x-36 md:space-x-28 items-center">
        <div className="md:flex  lg:space-x-28 ">
          <div className="relative w-72 h-72 mx-auto m-2">
            <Image
              src={thumbnail}
              alt="Image not available"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="">
            <p className="text-gray-500 uppercase tracking-widest text-sm">
              {category}
            </p>
            <h2 className="font-semibold text-xl">{title}</h2>
            <div className="flex items-center">
              <AiFillStar className="text-yellow-400" />
              <AiFillStar className="text-yellow-400" />
              <AiFillStar className="text-yellow-400" />
              <AiOutlineStar className="text-gray-400" />
              <AiOutlineStar className="text-gray-400" />
              <p className="ml-4"> Reviews (10)</p>
            </div>

            <div className="md:w-72">
              <ul className="list-inside list-disc leading-relaxed text-gray-500 text-sm">
                <li>{description}</li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Provident, excepturi!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique cupiditate quia, sit aspernatur sapiente hic.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="px-2">
          <BuyCard
            price={price}
            id={id}
            title={title}
            slug={slug}
            thumbnail={thumbnail}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
