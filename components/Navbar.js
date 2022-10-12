import React from "react";
import { HiOutlineLocationMarker, HiOutlineTruck } from "react-icons/hi";
import { BiUser } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiOutlineDown,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  return (
    <div className="">
      <section className="hidden md:block">
        <div className="flex justify-evenly py-2 text-sm border-b">
          <div>
            <div>
              <h3>Welcome to Bombinate Store</h3>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex items-center border-r-2 pr-4">
              <HiOutlineLocationMarker />
              Store Locator
            </div>
            <div
              className="flex items-center border-r-2 pr-4 cursor-pointer"
              onClick={() => {
                router.push("/trackorder");
              }}
            >
              <HiOutlineTruck />
              Track your order
            </div>
            <div
              className="flex items-center font-medium cursor-pointer"
              onClick={() => {
                router.push("/register");
              }}
            >
              <BiUser />
              Register&nbsp; <span className="font-normal">or</span>&nbsp;Sign
              in
            </div>
          </div>
        </div>
      </section>
      <div className="flex items-center px-3 justify-between md:justify-evenly space-x-3 pt-3">
        <div className="flex items-center">
          <GiHamburgerMenu className="m-3 text-xl md:hidden" />
          <h2 className="text-xl md:text-3xl lg:text-5xl font-extrabold font-pompador">
            Bombinate<span className="text-4xl text-yellow-400">.</span>
          </h2>
        </div>

        <div className="flex justify-evenly">
          <div className="hidden md:block">
            <div className="flex md:bg-yellow-400 rounded-3xl items-center h-8 md:h-12">
              <div className="flex rounded-l-md px-1 items-center">
                <input
                  type="text"
                  placeholder="Search for products "
                  className="rounded-l-3xl w-56 md:w-96 px-4 focus:outline-none h-6 md:h-10"
                />
                <div className="hidden lg:block">
                  <div className="flex items-center bg-white p-2 ">
                    All categories
                    <AiOutlineDown className="mt-1 ml-3" />
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-r-lg">
                <AiOutlineSearch className="text-2xl " />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center text-2xl space-x-5">
            <AiOutlineHeart />
            <AiOutlineShoppingCart />
            <div className="text-lg font-bold hidden lg:block">₹999</div>
          </div>
        </div>
      </div>
      <div className="px-5 flex items-center">
        <div className="flex items-center space-x-4 border-2 border-yellow-400 p-2 rounded-full w-full md:hidden">
          <FiSearch className="text-2xl" />
          <input
            type="text"
            placeholder="Search for products"
            className="focus:outline-none w-full"
          />
          {/* <BsFillMicFill className="text-2xl" /> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
