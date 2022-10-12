import Image from "next/image";
import React from "react";

function FeaturedProduct() {
  return (
    <div className="flex items-center justify-center space-x-2 md:space-x-5 p-1">
      <div className="w-1/2 lg:w-96 relative h-20 sm:h-36 lg:h-40">
        <Image
          src={"/images/HomeOffers/1.png"}
          alt={"Image not available"}
          layout="fill"
          objectFit="cover"
          className="rounded"
          loading="lazy"
        />
      </div>
      <div className="w-1/2 lg:w-96  relative h-20 sm:h-36 lg:h-40">
        <Image
          src={"/images/HomeOffers/2.png"}
          alt={"Image not available"}
          layout="fill"
          objectFit="cover"
          className="rounded"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default FeaturedProduct;
