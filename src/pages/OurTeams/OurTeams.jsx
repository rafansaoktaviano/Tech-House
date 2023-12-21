import React, { useEffect, useState } from "react";
import ourteams from "./../../assets/ourteamsbanner.avif";
import { motion } from "framer-motion";
import axios from "axios";
import Footer from "../../components/Footer/Footer";
import "./styles.css"
const OurTeams = () => {
  const [userData, setUserData] = useState([]);

  const randomUser = async () => {
    try {
      const res = await axios.get(
        "https://randomuser.me/api/?inc=name,email,location,picture&results=20"
      );

      setUserData(res.data.results);
    } catch (error) {
      alert(alert);
    }
  };

  useEffect(() => {
    randomUser();
  }, []);


  return (
    <section className="h-auto w-full bg-[#151921]">
      <div className="h-screen w-full">
        <img
          src={ourteams}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div class="gradient-overlay"></div>
        <motion.div
          className="absolute top-[400px] w-full text-white text-[65px] banner-text flex justify-center wrap-our items-start  flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          loading="lazy"
        >
          <h1 className="font-bold">Tech House</h1>
          <p className="text-[24px] text-our w-[50%]">
            At Tech House, innovation is woven into the fabric of our culture.
            Meet the creative minds and technical wizards behind our success — a
            team dedicated to transforming ideas into digital realities.
          </p>
        </motion.div>
      </div>
      <div className="h-auto w-full wrap-teams p-[200px] ">
        <h1 className="text-[35px] font-semibold text-white mb-[50px]">Meet Our Teams</h1>
        <div className="grid grid-cols-5 grid-team  gap-[50px]">
          {userData &&
            userData.map((value, index) => {

              return (
                <div
                  key={index}
                  className=" min-w-[300px]  w-[300px] h-[400px] bg-[#C8C8C8] flex flex-col items-center justify-between"
                >
                  <img
                    src={value.picture.large}
                    className="w-[150px] mt-[60px] h-[150px] rounded-full "
                    alt=""
                  />
                  <div className="bg-[#13161d] w-full text-white h-[100px] shadow-2xl flex flex-col justify-center items-center">
                    <h1 className="font-bold">
                      {value.name.first + value.name.last}
                    </h1>
                    <h1 className="text-[#C8C8C8]">{value.email}</h1>
                    <h1 className="text-[#C8C8C8]">{value.location.street.number + " " + value.location.street.name}</h1>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default OurTeams;
