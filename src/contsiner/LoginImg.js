import React from "react";

const LoginImg = () => {
  return (
    <div>
      <div className="bg-[#ff8fa3] lg:min-h-screen">
        <span className="text-xl p-5  font-bold">NEWS</span>
        <img
          className="lg:max-h-screen p-32 lg:-mt-10 -mt-40"
          src="/images/login.svg"
          alt=""
        />
        <h1 className="-mt-32 text-white text-center text-2xl font-bold tracking-wide font-sans">
          Start for free and get <br /> attractive offers.
        </h1>
      </div>
    </div>
  );
};

export default LoginImg;
