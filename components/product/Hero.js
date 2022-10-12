import Image from "next/image";
import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import BuyCard from "./BuyCard";

function Hero() {
  return (
    <div className="p-2 flex justify-center ">
      <div className="md:flex lg:space-x-36 md:space-x-28 items-center">
        <div className="md:flex  lg:space-x-28 ">
          <div className="relative w-72 h-72 mx-auto">
            <Image
              src="/images/TopProducts/1.jpg"
              alt="Image not available"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="">
            <p className="text-gray-500 uppercase tracking-widest text-sm">
              Accessories
            </p>
            <h2 className="font-semibold text-xl">
              Ultra Wireless S50 Headphones
            </h2>
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
                <li>
                  ACTIVE NOISE CANCELLATION: Tune out the Noise & Tune in to
                  your Music with JBL Tune 760NC wireless headset.
                </li>
                <li>
                  LONG BATTERY LIFE: Up to 20 hours of battery life with active
                  noise cancellation on.
                </li>
                <li>
                  QUICK CHARGE: 2 hours of quick charge gives you 1 hour of
                  playback.
                </li>
                <li>
                  BLUETOOTH 5.0: Enjoy a seamless wireless connection with your
                  devices for music and calls.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="px-2">
          <BuyCard />
        </div>
      </div>
    </div>
  );
}

export default Hero;
