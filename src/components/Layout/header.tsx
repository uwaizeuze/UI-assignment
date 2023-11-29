import React from "react";
import Button from "../Button/button";

const Header = () => {
  return (
    <header className=" flex justify-around items-center bg-[#1650B0] h-10 w-full ">
      <div className="">
        <h1 className="font-normal text-[#fff] text-3xl">Justin Brach</h1>
      </div>
      <div className="">
        <Button />
      </div>
    </header>
  );
};

export default Header;
