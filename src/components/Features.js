import React from "react";
/* import components */
import FeatureSection1 from "./FeaturesSection1";
import FeatureSection2 from "./FeaturesSection2";
import FeatureSection3 from "./FeaturesSection3";
const Features = () => {
  return (
    <section className="pt-12 lg-pt-24 bg-violet">
      <div className="container mx-auto">
        <div className="text-center max-w-[758px] mx-auto mb-24">
          <h2
            className="section-title"
            data-aos="fade-up"
            data-aos-offset="400"
          >
            Market sentiments, portfolio, a;d run the infrastructure of your
            choice
          </h2>
        </div>
        <FeatureSection1 />
        <FeatureSection2 />
        <FeatureSection3 />
      </div>
    </section>
  );
};

export default Features;
