import React from "react";

const Footer = () => {
  return (
    <>
      <div className="h-[400px] bg-[#11141b] py-[72px] text-white p-[300px]">
        <h1 className="text-[32px] font-bold">Tech House</h1>
        <h1 className="mb-[50px]">&copy; 2023 Tech House. All rights reserved.</h1>
        <div className="flex gap-3">
          <h1>Email : </h1>
          <h1>Techhouse@gmail.com</h1>
        </div>
        <div className="flex gap-3">
          <h1>Address : </h1>
          <h1>49571 Hilton Manors, East Lani, ME 09745</h1>
        </div>
        <div className="flex gap-3">
          <h1>Phone : </h1>
          <h1> +62 1017210839183201</h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
