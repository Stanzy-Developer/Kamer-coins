import React from "react";

/* import Data */
import { navData } from "../data";

const Nav = () => {
  return (
    <nav
      data-aos="fade-up-left"
      data-aos-delay="200"
      data-aos-duration="1000"
      className=" flex items-center"
    >
      <ul className="flex gap-x-8">
        {navData.map((item, index) => {
          return (
            <li
              key={index}
              className="border-b-2 border-transparent hover:border-blue transition-all duration-500 ease-in-out"
            >
              <a href={item.href}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
