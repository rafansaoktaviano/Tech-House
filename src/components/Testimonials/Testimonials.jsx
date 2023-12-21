import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import Leroy from "./../../assets/Leroy.jpeg";
import gloria from "./../../assets/gloria.jpeg";
import armando from "./../../assets/armando.jpeg";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Testimonials = () => {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={false}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        speed={2000}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide
          style={{
            background: "none",
            display: "flex",
            flexDirection: "column",
            gap: "50px",
          }}
        >
          <h1 className="text-center w-[50%] text-[22px] text-[#C8C8C8] leading-10 para-about">
            I have been working with Tech House for over a year now and they
            have been fantastic in all aspects of their service. The team is
            always responsive, very helpful and never leaves me waiting on
            responses to anything I need. The work they produce is of the
            highest quality and they are always happy to go above and beyond
            what I initially request. They've helped me grow my business.
          </h1>
          <div className=" flex justify-center flex-col items-center gap-2">
            <div className="rounded-full bg-slate-500 w-[75px] h-[75px]">
              <img
                src={Leroy}
                alt=""
                className=" w-[75px] h-[75px] rounded-full"
              />
            </div>
            <h1 className="text-[#75dab4] text-[18px]">Leroy J Quon</h1>
            <h1 className="text-white text-[13px]">Co-Founder, FROZEVERSE</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            background: "none",
            display: "flex",
            flexDirection: "column",
            gap: "50px",
          }}
        >
          <h1 className="text-center w-[50%] text-[22px] text-[#C8C8C8] leading-10 para-about">
            I want to say that building an app is not just about having a great
            idea. It takes years of hard work, patience, and perseverance.
            KIMA's software development team has been doing it for decades and
            the best products in the market have been built by them. If you're
            looking for a reliable partner, KIMA is the best solution.
          </h1>
          <div className=" flex justify-center flex-col items-center gap-2">
            <div className="rounded-full bg-slate-500 w-[75px] h-[75px]">
              <img
                src={gloria}
                alt=""
                className="w-[75px] h-[75px] max-w-[200px] max-h-[200px] rounded-full"
              />
            </div>
            <h1 className="text-[#75dab4] text-[18px]">Gloria C Mercado</h1>
            <h1 className="text-white text-[13px]">Co-Founder, Quantum</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            background: "none",
            display: "flex",
            flexDirection: "column",
            gap: "50px",
          }}
        >
          <h1 className="text-center w-[50%] text-[#C8C8C8] text-[22px] leading-10 para-about">
            I have been working with KIMA since 2018, and they have been an
            excellent choice. I've had the pleasure of working on projects with
            them in different countries and it has never failed to be a seamless
            process. The team is always available to answer any questions and
            keep me updated on the progress of my project.
          </h1>
          <div className=" flex justify-center flex-col items-center gap-2">
            <div className="rounded-full bg-slate-500 w-[75px] h-[75px]">
              <img
                src={armando}
                alt=""
                className="w-[75px] h-[75px] rounded-full"
              />
            </div>
            <h1 className="text-[#75dab4] text-[18px]">Armando R SuarezA</h1>
            <h1 className="text-white text-[13px]">Co-Founder, Savory</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Testimonials;
