import Banner from "../../components/Banner/Banner";
import Nav from "../../components/Nav/Nav";
import React, { useEffect, useRef, useState } from "react";
import home1 from "./../../assets/home1.jpeg";
import home2 from "./../../assets/home2.jpeg";
import home3 from "./../../assets/home3.jpeg";
import { motion } from "framer-motion";

import { BsLightningCharge } from "react-icons/bs";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { IoUmbrellaOutline } from "react-icons/io5";

import CardServices from "../../components/CardServices/CardServices";
import CardWorks from "../../components/CardWorks/CardWorks";

import porto1 from "./../../assets/porto1.webp";
import porto2 from "./../../assets/porto2.webp";
import porto3 from "./../../assets/porto3.webp";
import porto4 from "./../../assets/porto4.webp";
import porto5 from "./../../assets/porto5.webp";
import porto6 from "./../../assets/porto6.webp";

const Home = () => {
  const ourWork = [
    {
      image: porto1,
    },
    {
      image: porto2,
    },
    {
      image: porto3,
    },
    {
      image: porto4,
    },
    {
      image: porto5,
    },
    {
      image: porto6,
    },
  ];
  return (
    <>
      <Nav />
      <section>
        <Banner />
        <div className=" h-[720px] bg-[#151921] py-[120px] flex  justify-center items-center gap-[200px]  md:px-[200px] ">
          <motion.div
            className=" h-full flex gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="w-[250px]  h-full flex items-center ">
              <img src={home1} alt="" className="w-full " />
            </div>
            <div className="w-[250px] h-full flex flex-col gap-5">
              <img src={home2} alt="" className="w-full" />
              <img src={home3} alt="" className="w-full" />
            </div>
          </motion.div>
          <motion.div className=" py-[50px] w-auto">
            <h1 className="text-white font-bold tracking-widest mb-[50px]">
              ABOUT US
            </h1>
            <h2 className="text-[35px] text-white font-semibold w-[50%] mb-[50px] ">
              We are more than just a digital agency.
            </h2>
            <p className="text-[#C8C8C8] text-[15px]   w-[80%]">
              Tech House is a dynamic and innovative software design and
              engineering team established in 2023. Our mission is to bring
              positive change through technology. With a focus on meeting your
              digital needs, we employ cutting-edge development strategies to
              help you achieve your goals.At Tech House, we believe in the power
              of creativity and technology working together. Our team is
              dedicated to providing solutions that not only meet but exceed
              your expectations. Whether it's web development, mobile apps, or
              innovative software, we've got you covered.Partner with Tech House
              for a seamless blend of creativity and technology, propelling your
              business toward success in the digital landscape.
            </p>
          </motion.div>
        </div>
        {/* Services */}
        <div className="h-screen bg-[#11141b] py-[72px]">
          <h1 className="text-center text-[#75dab4] tracking-widest ">
            BEST FEATURES
          </h1>
          <h1 className="text-white text-center font-bold text-[64px]">
            SERVICES
          </h1>
          <div className="flex justify-center items-center h-full mt-[-50px]">
            <div className="flex gap-20">
              <CardServices
                title="Digital Marketing"
                text="It starts with the identification of
                    your customers online. There are many potential customers who are interested in what you offer, but who never heard about your brand, yet. So you have to reach them at some point, and sell them your products."
                icon={
                  <BsLightningCharge className="text-[32px] text-[#75dab4]" />
                }
              />
              <CardServices
                title="Web & App Development"
                text="Build websites and applications with the world's most trusted and
              popular development technologies. As trends and technologies shift so quickly, choosing the right software development partner can be a key factor determining your success or failure on the market."
                icon={
                  <HiOutlineDevicePhoneMobile className="text-[32px] text-[#75dab4]" />
                }
              />
              <CardServices
                title="Graphic Design"
                text="The first thing people are going to remember you for is your brand identity. A brand is formed by the consumers opinions and what they say about your brand; a good image is what gives it value."
                icon={
                  <IoUmbrellaOutline className="text-[32px] text-[#75dab4]" />
                }
              />
            </div>
          </div>
        </div>
        {/* OUR WORKS PORTOFOLIO */}
        <div className="h-screen bg-[#151921] py-[72px]">
          <h1 className="text-center text-[#75dab4] tracking-widest ">
            PORTOFOLIO
          </h1>
          <h1 className="text-white text-center font-bold text-[64px]">
            OUR WORKS.
          </h1>
          <div className="flex gap-10 w-full  overflow-scroll mt-[100px]">
            {ourWork?.map((value, index) => {
              return <CardWorks value={value} index={index} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
