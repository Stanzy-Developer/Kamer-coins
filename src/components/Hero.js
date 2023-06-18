import React from "react";

// import images

import Image from "../img/hero-img.png";

// import icons

import { IoIosArrowDroprightCircle } from "react-icons/io";

const Hero = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col items-center lg:flex-row">
          {/* hero text */}
          <div className="flex-1">
            {/* badge text */}
            <div
              className="bg-white/10 p-1 mb-6 rounded-full pll-1 pr-3 max-w-[365px"
              data-aos="zoom-in-up"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <div className="flex items-center justify-between text-sm lg:text-base">
                <div className="bg-white text-darkblue rounded-full fond-medium py-1 px-4">
                  75% SAVE
                </div>
                <div>for the Black Friday weekend</div>
              </div>
            </div>
            <h1
              className="text-[32px] lg:text-[64px] font-bold leading-tight mb-6"
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-duration="700"
            >
              Fastest & secure plateform to invest in crypto.
            </h1>
            <p
              className="max-w- leading-relaxed mb-8"
              data-aos="fade-down-right"
              data-aos-delay="500"
              data-aos-duration="700"
            >
              Buy and sell cryptocurrencies trusted by 2M wallets with over $10
              millions in transactions.
            </p>
            <button
              className="btn gap-x-6 pl-6 text-sm lg:h-16 lg:text-base"
              data-aos="zoom-in-up"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              Try for free{" "}
              <IoIosArrowDroprightCircle className="text-2xl lg:text-3xl" />
            </button>
          </div>
          {/* hero image */}
          <div>
            <img
              src={Image}
              alt=""
              className="flex-1"
              data-aos="fade-down"
              data-aos-delay="500"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
