import React from "react";
import LoginBtn from "../contsiner/LoginBtn";
import LoginEmail from "../contsiner/LoginEmail";
import LoginImg from "../contsiner/LoginImg";

const Login = () => {
  return (
    <div className=" min-w-full">
      <div className="lg:grid grid-cols-2 relative">
        <LoginImg />
        <div className="flex flex-col lg:pl-36 lg:pr-80 lg:pt-28 max-h-screen px-8 py-1">
          <h1 className="text-xl font-semibold">Login✌🏻</h1>
          <span className=" text-[#6c757d]">Log in to contine NEWS... </span>
          <LoginBtn />
          <div className="grid grid-cols-3 justify-center items-center text-[10px] lg:text-[11px] gap-3">
            <hr />
            <span className="text-gray-300">or Sign in with Email</span>
            <hr />
          </div>
          <LoginEmail />
        </div>
        <div className="absolute lg:right-2 lg:bottom-0 text-[12px] text-gray-400 right-28">
          @2022 News All Right Reserved
        </div>
      </div>
    </div>
  );
};

export default Login;
