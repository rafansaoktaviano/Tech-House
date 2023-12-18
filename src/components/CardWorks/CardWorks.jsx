import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";
import { FaChevronRight } from "react-icons/fa";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import bg1 from "./../../assets/bg1.avif";
const CardWorks = ({ index, value }) => {
  return (
    <div className="min-w-[400px]  h-[400px] bg-white rounded-2xl shadow-xl">
      <img
        src={value.image}
        className="min-w-[400px]  min-h-[300px] rounded-t-xl"
        alt=""
      />
      <div className="h-[100px] bg-[#13161d] w-full  rounded-b-xl flex justify-between items-center px-[24px]">
        <h1 className="font-bold text-white">{value.name}</h1>
        <FaChevronRight className="text-white" />
      </div>
    </div>
  );
};

export default CardWorks;
