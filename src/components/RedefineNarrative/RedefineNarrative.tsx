import Image from "next/image";
import React from "react";
import NerrativeImage from "../../../public/assets/nerrativeimage.png";
import background from "../../../public/assets/nerrativeBackground.png";

export const RedefineNarrative = () => {
  const Content = () => {
    return (
      <div>
        <p className="text-cyan-950 text-3xl font-extrabold pt-7 ">
          <span style={{ display: "block" }}>Redefine Your</span>
          <span style={{ display: "block" }}>Narrative</span>
        </p>

        <p className="text-[#1650B0] text-lg font-semibold pt-7 ">
          In My World, Mistakes Are Mere Footnotes.
        </p>
        <p className="text-[#1650B0] text-lg font-semibold  ">
          Unshakable Perseverance Writes the Tale
        </p>
        <p className="text-[#344C5C] text-lg font-medium  ">
          <b>"You Are Not Your Past"</b> is a riveting chronicle of <br />{" "}
          conquering fear, harnessing the power of <br /> perseverance, and
          achieving unparalleled success. <br /> In a world where tenacity
          prevails, my story is a <br /> classic example for the same
        </p>
        <div className=" mt-3">
          <span className=" bg-[#e7e9eb] text-[#344C5C] p-1">
            IF I CAN DO IT, SO CAN YOU!
          </span>
        </div>
        <div className=" my-6">
          <span className=" bg-[#235193] text-white p-3 rounded-sm">
            Pre-Order Now
          </span>
        </div>
      </div>
    );
  };

  const Images = () => {
    return (
      <div>
        <div style={{ position: "absolute", top: 145, right: 230 }}>
          <Image
            src={NerrativeImage}
            alt="Example Image"
            width={360}
            height={450}
            layout="fixed"
          />
        </div>
        <div style={{ marginLeft: 350, marginTop: 40 }}>
          <Image
            src={background}
            alt="Example Image"
            width={300}
            height={300}
            layout="fixed"
          />
        </div>
      </div>
    );
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Content />
      <Images />
    </div>
  );
};
