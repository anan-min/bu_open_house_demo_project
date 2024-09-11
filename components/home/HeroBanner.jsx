import React from "react";
import Image from "next/image";
import star from "@/public/star.svg";
import mascot_camera from "@/public/mascot_camera.svg";
import AnimatedText from "@/components/AnimatedText";

const HeroBanner = () => {
  return (
    <div className="relative min-h-[50vh] md:min-h-[100vh] bg-black flex items-center justify-center overflow-hidden">
      {/* Decorative Stars */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          className="absolute w-25 h-25 animate-spin"
          src={star}
          alt="Star"
          style={{ top: "5%", left: "3%" }} // Adjust positioning as needed
        />
        <Image
          className="absolute w-30 h-30 animate-spin"
          src={star}
          alt="Star"
          style={{ bottom: "5%", right: "5%" }} // Adjust positioning as needed
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl pl-10 pr-16">
        <div className="grid grid-cols-8 gap-12 md:gap-16 xl:gap-24 p-6">
          <div className="col-span-4 flex items-center justify-center">
            <AnimatedText
              text="LET'S PLAY"
              className="text-6xl md:text-7xl xl:text-8xl font-bold text-white whitespace-nowrap tracking-widest"
            />
          </div>
          <div className="col-span-4"></div>

          <div className="col-span-2 flex items-center justify-center">
            <Image
              src={mascot_camera}
              alt="Mascot Camera"
              className="w-40 h-auto"
            />
          </div>
          <div className="col-span-4 flex items-center justify-center pl-22">
            <AnimatedText
              direction="backward"
              style="flip"
              text="LIKE A PRO"
              className="text-6xl md:text-7xl  xl:text-8xl text-red-500 font-bold whitespace-nowrap tracking-widest"
            />
          </div>
          <div className="col-span-2"></div>

          <div className="col-span-1"></div>
          <div className="col-span-6 flex items-center justify-center ">
            <AnimatedText
              style="bounce"
              direction="backward"
              text="มาลองจนกว่าจะใช่"
              className="text-3xl md:text-7xl xl:text-8xl text-white  tracking-wide"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
