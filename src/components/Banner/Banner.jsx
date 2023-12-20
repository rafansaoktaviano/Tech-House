import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import bg1 from "./../../assets/bg1.avif";
import bg2 from "./../../assets/bg2.avif";
import bg6 from "./../../assets/bg6.avif";

import { motion } from "framer-motion";

import { TypeAnimation } from "react-type-animation";
const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPagination, setShowPagination] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowPagination(window.innerWidth >= 500);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={false}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={showPagination ? true : false}
        speed={2000}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        style={{ height: "100vh", position: "relative" }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
      >
        <SwiperSlide className="">
          <img
            src={bg1}
            alt=""
            className="min-w-[500px] min-h-[500px] object-cover "
            loading="eager"
          />
          <div class="gradient-overlay"></div>
          <motion.div
            className="absolute w-full  flex justify-center items-center flex-col"
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
          >
            <h1 className="text-[65px] text-white font-bold text-center   banner-title ">
              Your Idea Our Project
            </h1>
            <h2 className="text-white mb-[24px] para-about ">
              With our expert team, we recommend the best strategy to
              successfully achive your goals
            </h2>
            <button className="border px-[35px] py-[12px] font-semibold text-white transition ease-in-out duration-100 hover:bg-white hover:text-black">
              Look More
            </button>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={bg6} alt="" className="w-full h-full" loading="eager" />
          <div class="gradient-overlay"></div>
          <motion.div
            key={currentSlide}
            className="absolute w-full  flex justify-center items-center flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
          >
            <h1 className="text-[65px] text-white  font-extrabold text-center  tracking-wider banner-title ">
              Dream, Discuss, Develop
            </h1>
            <h2 className="text-white mb-[24px] para-about ">
              Providing your brands through prospective and creative digital
              solutions
            </h2>
            <button className="border px-[35px] py-[12px] font-semibold text-white transition ease-in-out duration-100 hover:bg-white hover:text-black">
              Look More
            </button>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={bg2} alt="" className="w-full h-full" loading="eager" />
          <div class="gradient-overlay"></div>
          <motion.div
            className="absolute w-full  flex justify-center items-center flex-col"
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
          >
            <h1 className="text-[65px] text-white  font-extrabold text-center xl:w-[50%] tracking-wider banner-title ">
              Where Creativity Meets Technology
            </h1>
            <h2 className="text-white mb-[24px] para-about">
              Providing your brands through prospective and creative digital
              solutions
            </h2>
            <button className="border px-[35px] py-[12px] font-semibold text-white transition ease-in-out duration-100 hover:bg-white hover:text-black">
              Look More
            </button>
          </motion.div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
