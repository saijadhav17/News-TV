import React from "react";
import { BiHomeSmile, BiBook } from "react-icons/bi";
import { BsCameraReels } from "react-icons/bs";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <>
   <div className="sticky top-0">

   
    <div className="bg-white md:px-20 px-4 py-4">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-[900] font-sans">
          <a href="/">NEWS</a>
        </div>
        <div className=" hidden lg:block ">
          <ul className="flex justify-center items-center gap-10 text-base font-sans font-medium">
            <li className="flex items-center justify-center gap-2">
              <BiHomeSmile />
              <a href="/">Home</a>
            </li>
            <li className="flex items-center justify-center gap-2">
              <BsCameraReels />
              <a href="/">Video</a>
            </li>
            <li className="flex items-center justify-center gap-2">
              <AiOutlineAlignLeft />
              <a href="/">Pools</a>
            </li>
            <li className="flex items-center justify-center gap-2">
              <BiBook />
              <a href="/">Magazine</a>
            </li>
            <li className="cursor-pointer">
              <VscWorkspaceTrusted />
            </li>
            <li className="cursor-pointer mt-[2px]">
              <IoNotificationsOutline />
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center relative">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Enter search term"
            className=" bg-[#f8f9fa] hidden sm:block rounded-full placeholder:text-[14px] py-2 pl-4 w-64"
          />
          <div className="sm:absolute right-4 cursor-pointer">
            <FiSearch size={24} />
          </div>
          <div className="sm:hidden ml-2">
          <img src="/images/facebook.svg" alt="" />
          </div>
        </div>
      </div>

      <div className="block sm:hidden mt-2">
        <ul className="flex justify-between items-center gap-4 text-sm font-sans font-medium">
          <a href="/">
            <li className="flex items-center justify-center gap-2 bg-blue-50 rounded-full p-2">
              <BiHomeSmile />
              Home
            </li>
          </a>

          <a href="/">
            <li className="flex items-center justify-center gap-2 bg-blue-50 rounded-full p-2">
              <BsCameraReels />
              Video
            </li>
          </a>
          <a href="/">
            <li className="flex items-center justify-center gap-2 bg-blue-50 rounded-full p-2">
              <AiOutlineAlignLeft />
              Pools
            </li>
          </a>
          <a href="/">
            <li className="flex items-center justify-center gap-2 bg-blue-50 rounded-full p-2">
              <BiBook />
              Magazine
            </li>
          </a>
        </ul>
      </div>
    </div>
    </div>
    </>
  );
};

export default Navbar;
