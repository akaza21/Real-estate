import React from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";

function Navbar() {
  return (
    <div className="flex justify-between px-4 py-4 items-center">
      <div className="text-xl">
        <h1>Realestate</h1>
      </div>

      <div className="flex justify-center cursor-pointer">
        <div className="text-base px-4 hover:text-[#468fd1] transition delay-150 hover:border-b-[3px] mx-2 border-[#468fd1] font-[550] opacity-90 ">
          <h1>Search</h1>
        </div>
        <div className="text-base px-4 hover:text-[#468fd1] transition delay-150 hover:border-b-[3px] mx-2 border-[#468fd1] font-[550] opacity-90 ">
          <h1>About</h1>
        </div>
        <div className="text-base px-4 hover:text-[#468fd1] transition delay-150 hover:border-b-[3px] mx-2 border-[#468fd1] font-[550] opacity-90 ">
          <h1>Help</h1>
        </div>
        <div className="text-base px-4 hover:text-[#468fd1] transition delay-150 hover:border-b-[3px] mx-2 border-[#468fd1] font-[550] opacity-90 ">
          <h1>Real Estate Agents</h1>
        </div>
        <div className="text-base px-4 hover:text-[#468fd1] transition delay-150 hover:border-b-[3px] mx-2 border-[#468fd1] font-[550] opacity-90 ">
          <h1>Blog</h1>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="opacity-50">
          <BsFillSuitHeartFill />
        </div>
        <div className="rounded-full h-8 w-8 bg-gray-400 ml-8"></div>
      </div>
    </div>
  );
}

export default Navbar;
