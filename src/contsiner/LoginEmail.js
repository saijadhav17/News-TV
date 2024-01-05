import React from "react";

const LoginEmail = () => {
  return (
    <div>
      <div className="pt-4 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-normal" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your Email"
            className="p-5 text-sm border-2 w-full h-10 rounded-full "
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-normal" htmlFor="password">
            Password
          </label>
          <input
            type="email"
            placeholder="Enter your Password"
            className="p-5 text-sm border-2 w-full h-10 rounded-full "
          />
          <div className="cursor-pointer  flex justify-end text-[11px] text-[#ff758f] hover:text-black">
            Forget Password?
          </div>
        </div>

        <div>
          <a
            href="#_"
            className="relative z-10  w-full p-0.5 inline-flex items-center justify-center font-semibold overflow-hidden group rounded-full"
          >
            <span className="w-full h-full rounded-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
            <span className="relative rounded-full flex justify-center w-full py-2 transition-all ease-out bg-gray-900 group-hover:bg-opacity-0 duration-400">
              <span className="relative text-white">Login</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginEmail;
