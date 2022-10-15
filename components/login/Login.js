import { useRouter } from "next/router";
import React from "react";
import Brands from "../index/Brands";
import TopProducts from "../index/TopProducts";

function Login() {
  const router = useRouter();
  return (
    <div className="min-h-screen">
      <div className="flex justify-center ">
        <div className="mt-10 lg:w-1/5 flex justify-start">
          <div>
            <div className="text-3xl font-semibold">Signup</div>
            <div className="border-b-2 border-yellow-400 mt-2" />
            <div>Welcome! Create your very own account</div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <div className="font-semibold">
          <span>Email address</span>
          <div className="w-80 md:w-96">
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-full p-2 focus:outline-none"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="font-semibold">
          <span>Password</span>
          <div className="w-80 md:w-96">
            <input
              type="text"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-full p-2 focus:outline-none"
            />
          </div>
          <div
            className="cursor-pointer mt-2"
            onClick={() => {
              router.push("/register");
            }}
          >
            Don&apos;t have an account?
            <span className="text-blue-600"> Create now!</span>
          </div>
          <button className="bg-yellow-400 py-2 px-10 rounded-full font-bold mt-4">
            Register
          </button>
        </div>
      </div>
      <div className="mt-20">
        <TopProducts />
      </div>
    </div>
  );
}

export default Login;
