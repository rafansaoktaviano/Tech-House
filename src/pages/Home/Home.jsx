import Banner from "../../components/Banner/Banner";
import Nav from "../../components/Nav/Nav";
import React, { useRef, useState } from "react";

const Home = () => {
  return (
    <>
      <Nav />
      <section>
        <Banner />
        <div className="w-full h-screen bg-[#11141B]"></div>
        <div className="w-full h-screen bg-[#11141B]"></div>
      </section>
    </>
  );
};

export default Home;
