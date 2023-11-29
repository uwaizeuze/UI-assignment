import React from "react";

const Footer = () => {
  return (
    <footer className="flex  bg-red-800 justify-around items-center h-80">
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
          <button className="w-[183px] h-10 bg-[#235193] rounded-r-[4px] relative -left-[7px]">
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
      </div>
    </footer>
  );
};

export default Footer;
