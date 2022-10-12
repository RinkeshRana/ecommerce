import { useRouter } from "next/router";
import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

function HomeDropdown({ title, url }) {
  const router = useRouter();
  return (
    <div className="border-r border-gray-500 cursor-pointer hidden lg:block">
      <div
        className="px-6 font-semibold text-xs lg:text-sm flex items-center"
        onClick={() => {
          router.push(url);
        }}
      >
        {title} <RiArrowDropDownLine className="text-2xl" />
      </div>
    </div>
  );
}

export default HomeDropdown;
