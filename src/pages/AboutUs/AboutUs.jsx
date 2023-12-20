import React, { useEffect, useState } from "react";


import "./styles.css";
import axios from "axios";
import work from "./../../assets/work.avif";
import Footer from "../../components/Footer/Footer";
const AboutUs = () => {
  const [userData, setUserData] = useState([]);

  const randomUser = async () => {
    try {
      const res = await axios.get(
        "https://randomuser.me/api/?inc=name,email,picture&results=10"
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
    <>
      <div>
        <div className="wrap-aboutus h-[720px]  bg-[#11141b] py-[120px] flex  justify-center items-center lg:gap-0  xl:gap-[150px] px-0  text-white flex-col">
          <div className="w-full whoWeAre h-[50%] flex items-center gap-20">
            <h1 className="text-[30px] min-w-[300px] w-[300px] font-bold">Who We Are ?</h1>
            <h1 className="text-[15px] text-[#C8C8C8]">
              We are the software design and engineering team with ones top shop
              high-quality services that plays a key role infulfilling your
              digital needs.
            </h1>
          </div>
          <div className="w-full h-[50%] flex whoWeAre items-center gap-20 ">
            <h1 className="text-[30px] min-w-[300px] w-[300px] font-bold ">Our Culture ?</h1>
            <h1 className="text-[15px] text-[#C8C8C8] ">
              Our company culture thrives on agility, creativity, and a passion
              for pushing boundaries. We embrace a culture of constant learning
              and adaptation, staying ahead of industry trends and technologies.
              Our values, including transparency, client-centricity, and a
              commitment to excellence, shape our daily operations. We foster an
              environment where ideas are valued, collaboration is encouraged,
              and every team member plays a crucial role in our collective
              success. Join us, and you'll discover a workplace that celebrates
              creativity, values individual contributions, and champions
              innovation in the digital realm.
            </h1>
          </div>
        </div>
        <div className=" employes  w-full flex items-center   h-auto bg-[#151921] py-[120px] lg:gap-0   px-0   ">
          <div className="w-[40%] min-w-[40%] flex px-[20px] flex-col items-start">
            <h1 className="text-center text-employees  text-[#75dab4] tracking-widest text-[17px]">
              EMPLOYEES
            </h1>
            <h1 className="text-[80px] text-our-team w-full text-white font-bold">
              OUR TEAM.
            </h1>
          </div>
          <div className="w-[60%] card-team  overflow-x-scroll  flex gap-10">
            {userData &&
              userData.map((value, index) => {
                console.log(value);
                return (
                  <div
                    key={index}
                    className=" min-w-[300px] h-[400px] bg-[#C8C8C8] flex flex-col items-center justify-between"
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
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="h-auto wrap-about2  w-full bg-[#151921]  flex">
          <div className="w-[40%] test3 flex justify-end ">
            <img
              src={work}
              className="min-w-[380px] test2  w-[500px] object-cover mr-[-100px] mt-[100px] z-20  min-h-[50px] h-[580px]"
              alt=""
            />
          </div>
          <div className="w-[60%] wrapper-about pl-[200px] py-[100px] pt-[100px] h-full bg-[#11141b]">
            <h1 className="text-[35px] mb-[50px] w-full text-white font-bold">
              ABOUT US.
            </h1>
            <p className="text-[#C8C8C8] w-[70%] min-w-[70%] text-[15px] mb-[24px]">
              Tech House is a trusted full-service software design and
              engineering team digital since 2017. Since our foundation, many
              talented digital specialists have joined our ranks and today we
              are the team software experts working from all around the world.
            </p>
            <p className="text-[#C8C8C8] w-[70%] min-w-[70% text-[15px]">
              The main objective of KIMA is to transform your ideas into
              high-quality functional products. Our top priority is to build
              long-term cooperation with the client by meeting their demands,
              expectations, and quality standards. We aspire to develop the
              products that stand out and generate value to our partners. Our
              success is based on our prime asset - the team.
            </p>
            <div className="flex flex-col gap-10 mt-[20px]">
              <div className="flex gap-3">
                <div className=" flex justify-center items-center w-[30px] h-[30px] min-w-[30px] min-h-[30px] rounded-full border text-[#75dab4] border-[#75dab4]">
                  1
                </div>
                <div className="text-white font-semibold">
                  <h1 className="text-[18px]">Our Mission</h1>
                  <p className="text-[16px]">
                    Delivering innovative and reliable solutions to meet our
                    clients needs with utmost quality and unwavering ethics.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className=" flex justify-center items-center w-[30px] h-[30px] min-w-[30px] min-h-[30px] rounded-full border text-[#75dab4] border-[#75dab4]">
                  2
                </div>
                <div className="text-white font-semibold">
                  <h1 className="text-[18px]">Our Vision/Goal</h1>
                  <p className="text-[16px]">
                    Enabling clients to leverage technology for their business
                    growth and success.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className=" flex justify-center items-center w-[30px] h-[30px] min-w-[30px] min-h-[30px] rounded-full border text-[#75dab4] border-[#75dab4]">
                  3
                </div>
                <div className="text-white font-semibold">
                  <h1 className="text-[18px]">Why Us</h1>
                  <div className="flex flex-col gap-5">
                    <h1 className="text-[18px]">
                      One stop shop of your diversity needs
                    </h1>
                    <p className="text-[16px] text-[#C8C8C8]">
                      We offers a multitude of products or services to our
                      customers, all under one roof. Our purpose is to provide
                      convenience and efficiency to our clients.
                    </p>
                    <h1 className="text-[18px]">Tracked Project Progress</h1>
                    <p className="text-[16px] text-[#C8C8C8]">
                      With high-level overview, flexible software development
                      management methodologies (Agile & Scrum), and certified
                      project manager, we carefully track every step of our
                      projects to deliver on time and on budget.
                    </p>
                    <h1 className="text-[18px]">
                      Deep understanding of your product and suitable features
                    </h1>
                    <p className="text-[16px] text-[#C8C8C8]">
                      We have delivered hundred solutions to our clients. We
                      pride ourselves to be the only customer-focused and
                      quality-driven digital development company that can
                      support all of your needs. True perfection is built on the
                      people you work with.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
