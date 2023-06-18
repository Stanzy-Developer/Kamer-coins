import React, { useEffect, useState } from "react";

/* Import Aos */
import Aos from "aos";
import "aos/dist/aos.css";

// import components
import Header from "./components/Header";
import Hero from "./components/Hero";
import NavMobile from "./components/NavMobile";
import Stats from "./components/Stats";
import Why from "./components/Why";
import Calculate from "./components/Calculate";
import Trade from "./components/Trade";
import Features from "./components/Features";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  /* mobile nav state */
  const [navMobile, setNavMobile] = useState(false);

  /* aos init */
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });
  return (
    <div className="overflow-hidden">
      <Header setNavMobile={setNavMobile} />
      <Hero />
      {/* mobile nav */}
      <div
        className={` ${
          navMobile ? "right-0" : "-right-full"
        } fixed z-10 transition-all top-0 h-full duration-500 ease-in delay-150`}
      >
        <NavMobile setNavMobile={setNavMobile} />
      </div>

      {/* Stats */}
      <Stats />
      <Why />
      <Calculate />
      <Trade />
      <Features />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
