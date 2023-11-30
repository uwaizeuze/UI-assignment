/* eslint-disable react/no-unescaped-entities */
import React from "react";
import backgroundImageUrl from "../../../public/assets/backgroundImage.png";
import AboutPerson from "../../../public/assets/AboutPerson.svg";
import Image from "next/image";

const About = () => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="  h-[100vh] bg-[#011938]  flex  justify-center  items-center">
      <div
        style={{
          backgroundImage: `url(${backgroundImageUrl.src})`,
          width: "400px",
          height: "400px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Image
          src={AboutPerson}
          alt={AboutPerson}
          width={200}
          height={200}
          className=" relative left-28 top-32"
        />
      </div>
      <div className="w-1/3 ">
        <h1 className="text-4xl text-[#fff] font-bold my-5">About</h1>
        <p className="text-[#fff] text-sm leading-[25px]">
          I am the CEO of three companies dedicated to making a difference:
          Solar Quote, SubcontractorHub, and ExpansionJS. Our focus is on
          providing solutions for consumers and contractors that create
          efficient processes, aiming to collapse timelines and reduce costs. I
          firmly believe in the power of persevering through all obstacles to
          achieve success.
        </p>
        <p className="text-[#fff] text-sm my-5 leading-[25px]">
          My goal is to positively impact the lives of one billion people. Being
          passionate about health and wellbeing, I have authored the book "You
          Are Not Your Past," and developed an app, MustMotivate. These
          platforms bring together tools for awareness, metrics for health, and
          resources to build communities focused on wellbeing.
        </p>
      </div>
    </div>
  );
};

export default About;
