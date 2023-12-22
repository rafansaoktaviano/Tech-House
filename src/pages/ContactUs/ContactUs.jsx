import React from "react";
import Footer from "../../components/Footer/Footer";

const ContactUs = () => {
  return (
    <div className="h-screen ">
      <section>
        <div className="w-full h-full  py-[200px] bg-[#151921]">
          <div className="h-auto   py-[20px]">
            <h1 className="text-white text-center title-about font-bold text-[64px] lg:mb-[50px]  mb-[20px]">
              <span className="text-[#75dab4]"> LET'S</span> TALK ABOUT YOUR
              PROJECT.
            </h1>
            <form action="">
              <div className="wrap-getintouch px-[300px] mb-[50px]">
                <div className="flex gap-10 mb-[20px] name-gmail">
                  <div className="inputan relative z-0 w-[50%] mb-5 group">
                    <input
                      type="text"
                      name="fullname"
                      id="fullname"
                      className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="fullname"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Fullname
                    </label>
                  </div>
                  <div className="inputan relative z-0 w-[50%] mb-5 group">
                    <input
                      type="email"
                      name="floating_email"
                      id="floating_email"
                      className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_email"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Email address
                    </label>
                  </div>
                </div>
                <div>
                  <div className="relative z-0 w-full mb-5 group">
                    <textarea
                      type="text"
                      name="message"
                      id="message"
                      className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="message"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Message
                    </label>
                  </div>
                </div>
              </div>
            </form>
            <div className="  flex justify-center items-center">
              <button className=" border px-[35px] py-[12px] font-semibold text-white transition ease-in-out duration-100 hover:bg-white hover:text-black">
                SEND MESSAGE
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactUs;
