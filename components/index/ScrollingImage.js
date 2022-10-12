import Image from "next/image";
import React from "react";

function ScrollingImage({ img }) {
  return (
    <div className=" md:block ">
      <div className="min-w-full relative h-36 sm:h-56 lg:h-96">
        <Image
          src="/images/Homebanner/1.png"
          alt={"Image not available"}
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>
    </div>
  );
}

export default ScrollingImage;
