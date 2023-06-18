import React from "react";

const AccountBtns = () => {
  return (
    <div className="flex gap-x-5 font-medium items-center">
      {/* Lin btn */}
      <a
        href="#"
        className="cursor-pointer hover:text-blue transition-all duration-500"
      >
        Login
      </a>
      {/* separator */}
      <span className="text-white/20 font-thin">|</span>
      {/* resgiter btn */}
      <button className="cursor-pointer btn h-[52px] text-base px-8">
        Register
      </button>
    </div>
  );
};

export default AccountBtns;
