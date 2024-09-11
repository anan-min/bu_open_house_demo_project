import React from "react";
import Image from "next/image";
import banner from "@/public/banner_2.jpg";

const Gallery = () => {
  return (
    <Image
      src={banner}
      alt="phone image"
      layout="responsive"
      width={1200} 
      height={600} 
      className="object-cover"
    />
  );
};

export default Gallery;
