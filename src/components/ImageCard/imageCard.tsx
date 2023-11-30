import Image from "next/image";
import React from "react";
import AppImage from "../../../public/assets/AppImage.svg";

const ImageCard = () => {
  return <Image src={AppImage} alt="Example Image" width={200} height={200} />;
};

export default ImageCard;
