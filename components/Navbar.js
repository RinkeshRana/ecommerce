import React, { useEffect, useState } from "react";
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
import { useSelector } from "react-redux";
import SearchResult from "./SearchResult";
import { cartProducts, subTotal } from "../features/cartSlice";

function Navbar() {
  const router = useRouter();
  const cartTotal = useSelector((state) => state.cart.products);
  const cartSubTotal = useSelector(subTotal);

  const [searchInput, setSearchInput] = useState("");
  const [searchData, setSearchData] = useState();
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchInput.length >= 3) {
        fetch(`/api/get-products?search=${searchInput}`)
          .then((res) => res.json())
          .then((data) => {
            setSearchData(data);
            console.log(data);
          });
      }
    }, 1000);
  }, [searchInput]);

  return (
    <div className="relative">
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
            <div className="flex items-center font-medium ">
              <BiUser />
              <span
                className="cursor-pointer"
                onClick={() => {
                  router.push("/register");
                }}
              >
                Register
              </span>
              &nbsp; <span className="font-normal">or</span>&nbsp;
              <span
                className="cursor-pointer"
                onClick={() => {
                  router.push("/login");
                }}
              >
                Sign in
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="flex items-center px-3 justify-between md:justify-evenly space-x-3 pt-3">
        <div className="flex items-center">
          <GiHamburgerMenu className="m-3 text-xl md:hidden" />
          <h2
            className="text-xl md:text-3xl lg:text-5xl font-extrabold font-pompador cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          >
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
                  value={searchInput}
                  onChange={(e) => {
                    setSearchInput(e.target.value);
                  }}
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
            <div className="relative">
              <AiOutlineShoppingCart
                className="cursor-pointer"
                onClick={() => {
                  router.push("/cart");
                }}
              />
              {cartTotal.length > 0 && (
                <span className="absolute top-3 -right-3 text-xs p-1 rounded-full h-4 w-4 font-extrabold">
                  {cartTotal.length}
                </span>
              )}
            </div>
            <div className="text-lg font-bold hidden lg:block">
              ₹{cartSubTotal}
            </div>
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
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          {/* <BsFillMicFill className="text-2xl" /> */}
        </div>
      </div>
      <div className="absolute z-10 flex justify-center w-full">
        <div className="p-2 md:mt-4 w-3/4 md:w-1/2 lg:w-1/4 text-center rounded-md max-h-56 overflow-y-scroll scrollbar-thin scrollbar-thumb-yellow-500">
          {searchData &&
            searchData.map((item) => {
              return (
                <div
                  className="w-full bg-yellow-400 my-1 p-3 rounded-md cursor-pointer hover:bg-yellow-500 font-semibold"
                  key={item.id}
                  onClick={() => {
                    setSearchData("");
                    router.push(`/product/${item.slug}`);
                  }}
                >
                  <div>{item.title}</div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
