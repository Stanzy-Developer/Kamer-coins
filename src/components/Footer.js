import React from "react";

/* import images */
import Logo from "../img/logo.svg";
import Visa from "../img/visa.png";
import MasterCard from "../img/mastercard.png";
import BTC from "../img/bitcoin.png";

/* import icons */
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  const year = new Date();
  return (
    <footer className="lg:pt-24 pt-12" data-aos="fade-up" data-aos-offset="500">
      <div className="container mx-auto lg:mb-5">
        <div className="flex flex-col gap-12 lg:flex-row">
          {/* logo */}
          <div className="flex-1 mx-auto lg:mx-0 mb-6 max-w-[285px]">
            <img src={Logo} alt="" className="cursor-pointer" />
          </div>
          {/* social media links  */}
          <div className=" flex flex-1 flex-col gap-16 lg:flex-row">
            <div className="text-center w-full lg:text-left">
              <div className="text-xl font-medium mb-6">Quick Links</div>
              <ul className="space-y-4 text-gray">
                <li>
                  <a className="hover:text-blue transition" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue transition" href="#">
                    Products
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue transition" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue transition" href="#">
                    Features
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue transition" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center w-full lg:text-left">
              <div className="text-xl font-medium mb-6">Resources Links</div>
              <ul className="space-y-4 text-gray">
                <li>
                  <a className="hover:text-blue transition" href="#">
                    Download Whitepapper
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue transition" href="#">
                    Smart Token
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue transition" href="#">
                    Blockchain Explore
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue transition" href="#">
                    Crypto API
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue transition" href="#">
                    Interest
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* payment */}
          <div className="flex flex-1 flex-col">
            <div className="lg:ml-[80px]">
              <h3 className="h3 font-medium text-center mb-10 lg:text-left">
                We accept following payment systems
              </h3>
              <div className="flex justify-center items-center gap-6">
                <img src={Visa} alt="" className="" />
                <img src={MasterCard} alt="" className="" />
                <img src={BTC} alt="" className="" />
              </div>
            </div>
          </div>
        </div>
        {/* copy right */}
        <div className="mt-10">
          <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
            {/* copy text */}
            <div className="">
              &copy;{year.getFullYear()} CRAPPO. All rights reserved.Developed
              by{" "}
              <span className="italic font-thin">
                <a
                  href="https://portfolio-stanzy237.onrender.com/"
                  target="_blank"
                  className="underline text-blue"
                >
                  stanzy-code237
                </a>
              </span>
            </div>
            {/* social icons */}
            <div className="flex text-2xl gap-x-8">
              <a
                href="https://github.com/Stanzy-Developer/Kamer-coins"
                target="_blank"
                className="hover:text-blue transition "
              >
                <IoLogoGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/stanley-nouping-887683253"
                target="_blank"
                className="hover:text-blue transition "
              >
                <IoLogoLinkedin />
              </a>
              <a href="#" className="hover:text-blue transition ">
                <IoLogoTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
