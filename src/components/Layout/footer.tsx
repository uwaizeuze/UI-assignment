import React from "react";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { CgYoutube } from "react-icons/cg";
import { BiLogoTiktok } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="flex  bg-[#1A1737] justify-around items-center h-36">
      <div>
        <h1 className="text-[#FFFFFF] text-2xl font-normal my-3">
          Subscribe to my Newsletter
        </h1>
        <div className="flex ">
          <input
            type="text"
            id="first_name"
            className="bg-[#2C294F] border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:border-gray-400"
            placeholder="email"
          />
          <button className="w-[183px] h-10 bg-[#235193] rounded-r-[4px] relative -left-[7px] text-white">
            Signup
          </button>
        </div>
      </div>
      <div>
        <div>
          <h2 className="text-lg text-[#fff] font-normal">
            © 2023. All Rights reserved
          </h2>
        </div>
        <div className="flex gap-4 mt-4 items-center">
          <div className="h-7 w-7 bg-[#2C294F] rounded-full">
            <FaFacebook
              size={20}
              color="#fff"
              className="cursor-pointer relative top-1 left-1"
            />
          </div>
          <div className="h-7 w-7 bg-[#2C294F] rounded-full">
            <FaInstagramSquare
              size={20}
              color="#fff"
              className="cursor-pointer relative top-1 left-1"
            />
          </div>
          <div className="h-7 w-7 bg-[#2C294F] rounded-full">
            <FaLinkedin
              size={20}
              color="#fff"
              className="cursor-pointer relative top-1 left-1"
            />
          </div>
          <div className="h-7 w-7 bg-[#2C294F] rounded-full">
            <FaSquareXTwitter
              size={20}
              color="#fff"
              className="cursor-pointer relative top-1 left-1"
            />
          </div>
          <div className="h-7 w-7 bg-[#2C294F] rounded-full">
            <CgYoutube
              size={20}
              color="#fff"
              className="cursor-pointer relative top-1 left-1"
            />
          </div>
          <div className="h-7 w-7 bg-[#2C294F] rounded-full">
            <BiLogoTiktok
              size={20}
              color="#fff"
              className="cursor-pointer relative top-1 left-1"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
