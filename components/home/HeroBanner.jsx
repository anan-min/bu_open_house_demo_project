import React from "react";
import Image from "next/image";
import star from "@/public/star.svg";

const HeroBanner = () => {
  return (
    <div className="relative min-h-screen bg-black">
      <div className="relative min-h-screen flex items-center justify-center">
        <Image
          className="absolute w-25 h-25 z-10 right-5 animate-spin m-10"
          src={star}
          alt="Star"
        />
        <Image
          className="absolute w-30 h-30 z-10 top-20 left-10 animate-spin m-10"
          src={star}
          alt="Star"
        />
      </div>
    </div>
  );
};

export default HeroBanner;
