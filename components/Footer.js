import React from "react";

function Footer() {
  return (
    <div className="w-full bg-gray-800  md:flex md:justify-center p-4">
      <div className="md:w-3/4 lg:w-3/5 justify-between flex items-center">
        <div className=" p-2 ">
          <h2 className="text-xl md:text-3xl lg:text-5xl font-extrabold font-pompador text-white">
            Bombinate<span className="text-4xl text-yellow-400">.</span>
          </h2>
        </div>
        <div className="text-white md:text-lg text-sm font-semibold">
          Got questions? <span className="text-yellow-400">Call us 24/7!</span>
          <div>(+91) 3297893228</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
