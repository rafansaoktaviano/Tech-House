import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
const Nav = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`wrap-nav ${
        isMenuOpen === true ? "bg-black h-full" : "wrap-nav  "
      }   ${
        scrolling
          ? "bg-[#11141B] shadow-2xl flex fixed top-0 z-50 justify-between text-white  px-[200px] h-[80px] items-center text-[12px] w-full"
          : "flex fixed top-0 z-50 justify-between text-white  px-[200px] h-[80px] items-center text-[12px] w-full"
      } `}
    >
      <div className="flex justify-between w-full p-[20px]">
        <Link to={"/"}>
          <h1 className="cursor-pointer font-bold text-[24px]">Tech House</h1>
        </Link>
        <RxHamburgerMenu
          onClick={toggleMenu}
          className="text-[32px] hamburger"
        />
      </div>
      <nav className={` ${isMenuOpen ? "block" : "hidden"} wrap-ul w-full `}>
        <ul className="flex gap-[20px] font-semibold wrap-li items-center">
          <li
            onClick={() => {
              setIsMenuOpen(false);
              navigate("/services");
            }}
            className="li cursor-pointer"
          >
            Services
          </li>
          <li
            onClick={() => {
              setIsMenuOpen(false);
              navigate("/ourteams");
            }}
            className="li cursor-pointer"
          >
            Our Teams
          </li>
          <li
            onClick={() => {
              setIsMenuOpen(false);
              navigate("/about");
            }}
            className="li cursor-pointer"
          >
            About Us
          </li>
          <li
            onClick={() => {
              setIsMenuOpen(false);
              navigate("/contact");
            }}
            className="li cursor-pointer"
          >
            Contact Us
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
