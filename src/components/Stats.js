import React from "react";

/* import icons */
import { HiChartBar, HiUser, HiGlobe } from "react-icons/hi";
const Stats = () => {
  return (
    <section
      className="pt-24"
      data-aos="fade-up"
      data-aos-delay="1200"
      data-aos-duration="1700"
    >
      <div className="container mx-auto my-5">
        <div className="flex flex-col gap-y-5 lg:flex-row justify-between">
          {/* items */}
          <div className="flex items-center gap-x-6">
            <div className="bg-white/10 h-20 w-20 rounded-full flex items-center text-blue text-2xl lg:text-4xl justify-center">
              <HiChartBar />
            </div>
            <div>
              <div className="text-2xl font-bold lg:text[40px] lg:mb-2">
                $10M
              </div>
              <div>Digital Currency Exchanged</div>
            </div>
          </div>
          <div className="flex items-center gap-x-6">
            <div className="bg-white/10 h-20 w-20 rounded-full flex items-center text-blue text-2xl lg:text-4xl justify-center">
              <HiUser />
            </div>
            <div>
              <div className="text-2xl font-bold lg:text[40px] lg:mb-2">
                $2M+
              </div>
              <div>Trusted Wallets Investor</div>
            </div>
          </div>
          <div className="flex items-center gap-x-6">
            <div className="bg-white/10 h-20 w-20 rounded-full flex items-center text-blue text-2xl lg:text-4xl justify-center">
              <HiGlobe />
            </div>
            <div>
              <div className="text-2xl font-bold lg:text[40px] lg:mb-2">
                56+
              </div>
              <div>Countries Supported</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
