import React from "react";

import "./styles.css";
import { FaChevronRight } from "react-icons/fa";

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
