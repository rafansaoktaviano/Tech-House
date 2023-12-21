import React from "react";
import servicesbanner from "./../../assets/servicesbanner.avif";
import { motion } from "framer-motion";
import CardServices from "../../components/CardServices/CardServices";
import { BsLightningCharge } from "react-icons/bs";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { IoUmbrellaOutline } from "react-icons/io5";
import CardWorks from "../../components/CardWorks/CardWorks";
import porto1 from "./../../assets/porto1.webp";
import porto2 from "./../../assets/porto2.webp";
import porto3 from "./../../assets/porto3.webp";
import porto4 from "./../../assets/porto4.webp";
import porto5 from "./../../assets/porto5.webp";
import porto6 from "./../../assets/porto6.webp";
import Testimonials from "../../components/Testimonials/Testimonials";
import Footer from "../../components/Footer/Footer";
import "./styles.css";
const ServicesPage = () => {
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
      <section>
        <div className="w-full h-screen relative">
          <img
            src={servicesbanner}
            alt=""
            className="min-w-[400px] min-h-[500px] w-full h-full object-cover "
            loading="eager"
          />
          <div class="gradient-overlay"></div>
          <motion.div
            className="absolute top-[500px] w-full  banner-text flex justify-center items-start px-[500px] flex-col"
            //   key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            loading="lazy"
          >
            <h1 className="text-[65px] text-white font-bold text-center  tracking-widest ">
              Stories
            </h1>
            <p className="text-white  mb-[24px] w-[60%] para-main  leading-8">
              We are not doing this halfway. We are going all the way. We are
              challenging ourselves to stay ahead for our clients.
            </p>
          </motion.div>
        </div>
        <div className="h-auto text-expert w-full bg-[#11141b] py-[100px] px-[400px]">
          <motion.div className="about-text py-[50px] w-auto ">
            <h1 className="text-white  font-bold tracking-widest mb-[20px]">
              ABOUT US
            </h1>
            <h2 className="text-[35px] text-[#75dab4] title-about  font-semibold   xl:w-[50%] mb-[50px] ">
              With our expert team, we deliver out tanding digital experiences.
            </h2>
            <p className="text-[#C8C8C8] para-about  text-[15px] text-para  w-[50%] ">
              Tech House is a full-service software design and engineering team
              since 2017. Our vision is to accelerate good things with
              technology. Tech House plays a key role in fulfilling each of your
              digital needs. We provide and adapt the latest technological
              development strategies to allow you to reach your target by
              combining creativity and technology.
            </p>
          </motion.div>
        </div>
        {/* Services */}
        <div className="h-auto bg-[#11141b] py-[72px]">
          <h1 className="text-center text-[#75dab4] tracking-widest ">
            BEST FEATURES
          </h1>
          <h1 className="text-white text-center font-bold text-[64px]">
            SERVICES
          </h1>
          <div className="flex justify-center items-center h-full mt-[50px]">
            <div className="flex gap-20 services">
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
        <div className="h-full max-h-[764px]  bg-[#151921]  py-[72px]">
          <h1 className="text-center text-[#75dab4] tracking-widest ">
            PORTOFOLIO
          </h1>
          <h1 className="text-white text-center title-about font-bold text-[64px]">
            OUR WORKS.
          </h1>
          <div className="flex gap-10 w-full overflow-x-scroll   mt-[100px] h-[413px]">
            {ourWork?.map((value, index) => {
              return <CardWorks value={value} index={index} />;
            })}
          </div>
        </div>
        {/* TESTIMONIALS */}
        <div className="h-auto bg-[#151921] py-[150px]">
          <h1 className="text-center  text-[#75dab4] tracking-widest ">
            WHAT PEOPLE SAYS ?
          </h1>
          <h1 className="text-white  title-about text-center font-bold text-[64px] mb-[50px]">
            TESTIMONIALS.
          </h1>
          <div>
            <Testimonials />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ServicesPage;
