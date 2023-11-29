import Image from "next/image";
import React from "react";
import ShareIcon from "../../../public/assets/ShareIcon.svg";

const Button = () => {
  return (
    <div className="px-4 py-1 bg-[#55B4EC] flex  items-center justify-center rounded-[3px] my-2">
      <Image src={ShareIcon} alt={ShareIcon} width={15} height={15} />
      <button className="mx-2 text-sm font-normal text-[#fff]">Connect</button>
    </div>
  );
};

export default Button;
