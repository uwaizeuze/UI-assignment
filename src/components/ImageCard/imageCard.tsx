import Image from "next/image";
import React from "react";

const ImageCard = ({ imageUrl }: any) => {
  return <Image src={imageUrl} alt={imageUrl} width={150} height={150} />;
};

export default ImageCard;
