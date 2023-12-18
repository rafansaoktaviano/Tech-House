import React from "react";

const CardServices = (props) => {
  return (
    <>
      <div className="w-[370px] h-[510px] bg-[#151921] p-[60px] text-center">
        <div className="w-full flex justify-center items-center mb-[24px]">
          {props.icon}
        </div>
        <h1 className="text-white text-[18px] mb-[15px] font-bold">
          {props.title}
        </h1>
        <p className="text-[#C8C8C8] text-[15px] leading-8 ">{props.text}</p>
      </div>
    </>
  );
};

export default CardServices;
