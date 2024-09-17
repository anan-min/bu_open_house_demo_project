import React from "react";
import Image from "next/image";
import mascot_3 from "@/public/mascot_3.svg";

const Decorations = () => {
  return (
    <>
      <Image
        src={mascot_3}
        alt="mascot 3 image"
        className="absolute animate-shake rotate-12 z-10  w-20 top-8 left-1 md:w-48 md:top-24 md:left-10 xl:w-72  xl:top-44 xl:left-60"
      />
      <div className="absolute top-36 right-36 bg-orange-400 rounded-full w-32 h-32 z-10 animate-flip"></div>
      <div className="absolute bg-lime-300 h-2/3 w-full rotate-12 top-[-320px] right-[-20px] z-0"></div>

      <div className="absolute bottom-16 left-20 w-20 h-20 bg-red-300 animate-spin"></div>
      <div className="absolute bottom-12 right-36 w-36 h-36 bg-green-300 rounded-full animate-ping"></div>
    </>
  );
};

export default Decorations;
