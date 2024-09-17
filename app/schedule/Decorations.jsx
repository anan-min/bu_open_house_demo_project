import React from "react";
import Image from "next/image";
import star from "@/public/star.svg";
const Decorations = () => {
  return (
    <>
      <Image
        src={star}
        alt="star"
        className="absolute animate-spin top-12 left-8 w-12 md:top-12"
      />
      <Image
        src={star}
        alt="star"
        className="absolute animate-spin bottom-80 right-8 w-12 md:bottom-80"
      />
      <div className="absolute top-80 left-80 bg-blue-300 w-32 h-32 z-10 animate-shake"></div>

      <div className="absolute top-36 right-8 bg-orange-400 rounded-full w-32 h-32  animate-flip z-0"></div>
      <div className="absolute bottom-16 left-20 w-20 h-20 bg-red-300 animate-spin z-0"></div>
      <div className="absolute bottom-12 right-36 w-36 h-36 bg-green-300 rounded-full animate-ping z-0"></div>
    </>
  );
};

export default Decorations;
