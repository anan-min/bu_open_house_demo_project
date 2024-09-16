import React from "react";
import Image from "next/image";
import mascot_camera from "@/public/mascot_camera.svg";
import AnimatedText from "@/components/animations/AnimatedText";
import Decorations from "@/components/home/Decorations";

const HeroBanner = () => {
  return (
    <div className="relative min-h-[50vh] md:min-h-[100vh] bg-black flex items-center justify-center overflow-hidden">
      {/* Decorative Stars */}
      <Decorations />

      <div className="absolute  bg-red-400 animate-flip bottom-12 left-8 w-12 h-12 z-50 rotate-6 xl:w-24 xl:h-24 xl:left-36"></div>

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
