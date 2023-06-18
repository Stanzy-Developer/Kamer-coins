import React from "react";

/* Import icons */
import { CgMenuRight } from "react-icons/cg";

// import components
import Logo from "../img/logo.svg";
import Nav from "./Nav";
import AccountBtns from "./AccountBtns";

const Header = ({ setNavMobile }) => {
  return (
    <header
      className="py-[30px] lg:pt-[60px]"
      data-aos="fade-down"
      data-aos-delay="500"
      data-aos-duration="2000"
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#">
          <img src={Logo} alt="" />
        </a>
        {/* navs & Btns */}
        <div className="hidden lg:flex gap-x-[55px]">
          <Nav />
          <AccountBtns />
        </div>
        {/* open nav btn */}
        <div
          onClick={() => setNavMobile(true)}
          className="lg:hidden cursor-pointer"
        >
          <CgMenuRight className="text-3xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;
