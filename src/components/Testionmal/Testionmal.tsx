/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ImageCard from "../ImageCard/imageCard";
import AppImage from "../../../public/assets/AppImage.svg";
import Videos from "../../../public/assets/Video.svg";
import Blog from "../../../public/assets/BLog.svg";
import Book from "../../../public/assets/Book.svg";

const Testionmal = () => {
  const imageCards = Array.from({ length: 3 }, (_, index) => (
    <ImageCard key={index} />
  ));

  return (
    <div className="h-[60vh] bg-[#235193]">
      <div className=" flex justify-center items-center flex-col">
        <h1 className="text-center text-lg font-normal pt-7">
          Six Powerful 'Ps' for Achieving Success
        </h1>
        <p className=" w-1/2 text-[#fff]  my-3 text-base">
          Join me in learning how to push forward to success, embrace fear, stay
          humble and drive huge personal growth. Your journey to greatness
          begins here.
        </p>
      </div>
      <div>
        <ImageCard />
      </div>
    </div>
  );
};

export default Testionmal;
