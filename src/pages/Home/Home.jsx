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
import Testimonials from "../../components/Testimonials/Testimonials";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const ourWork = [
    {
      image: porto1,
      name: "Quantum",
    },
    {
      image: porto2,
      name: "Nike",
    },
    {
      image: porto3,
      name: "Savory",
    },
    {
      image: porto4,
      name: "Propeit",
    },
    {
      image: porto5,
      name: "Carway",
    },
    {
      image: porto6,
      name: "Frozeverse",
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
        <div className="h-[900px] bg-[#151921]  py-[72px]">
          <h1 className="text-center text-[#75dab4] tracking-widest ">
            PORTOFOLIO
          </h1>
          <h1 className="text-white text-center font-bold text-[64px]">
            OUR WORKS.
          </h1>
          <div className="flex gap-10 w-full overflow-x-auto  mt-[100px] h-full">
            {ourWork?.map((value, index) => {
              return <CardWorks value={value} index={index} />;
            })}
          </div>
        </div>
        {/* TESTIMONIALS */}
        <div className="h-[800px] bg-[#151921] py-[72px]">
          <h1 className="text-center text-[#75dab4] tracking-widest ">
            WHAT PEOPLE SAYS ?
          </h1>
          <h1 className="text-white text-center font-bold text-[64px] mb-[50px]">
            TESTIMONIALS.
          </h1>
          <div>
            <Testimonials />
          </div>
        </div>
        {/* CONTACT US */}
        <div className="h-[700px] bg-[#151921] py-[72px]">
          <h1 className="text-center text-[#75dab4] tracking-widest ">
            GET IN TOUCH
          </h1>
          <h1 className="text-white text-center font-bold text-[64px] mb-[50px]">
            CONTACT US.
          </h1>
          <div className="px-[300px] mb-[40px]">
            <div className="flex gap-10 mb-[20px] ">
              <div class="relative z-0 w-[50%] mb-5 group">
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_email"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Fullname
                </label>
              </div>
              <div class="relative z-0 w-[50%] mb-5 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_email"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>
            </div>
            <div>
              <div class="relative z-0 w-full mb-5 group">
                <textarea
                  type="text"
                  name="message"
                  id="message"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_email"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Message
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className=" border px-[35px] py-[12px] font-semibold text-white transition ease-in-out duration-100 hover:bg-white hover:text-black">
              SEND MESSAGE
            </button>
          </div>
        </div>
          <Footer />
       
      </section>
    </>
  );
};

export default Home;
