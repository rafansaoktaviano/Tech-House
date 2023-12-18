import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        scrolling
          ? "bg-[#11141B] shadow-2xl flex fixed top-0 z-50 justify-between text-white  px-[200px] h-[80px] items-center text-[12px] w-full"
          : "flex fixed top-0 z-50 justify-between text-white  px-[200px] h-[80px] items-center text-[12px] w-full"
      } `}
    >
      <Link to={"/"}>
        <h1 className="cursor-pointer font-bold text-[24px]">Tech House</h1>
      </Link>
      <nav className="">
        <ul className="flex gap-[20px] font-semibold">
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">Our Teams</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Contact Us</li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
