import React from "react";
import Image from "next/image";
import star from "@/public/star.svg";
import mascot_camera from "@/public/mascot_camera.svg";

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
        <div className="grid grid-cols-8 gap-14 md:gap-16 xl:gap-24 p-4">
          <div className="col-span-4 flex items-center justify-center">
            <h1 className="text-6xl md:text-7xl xl:text-9xl font-bold text-white whitespace-nowrap">
              LET'S PLAY
            </h1>
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
            <h2 className="text-6xl md:text-7xl  xl:text-9xl text-red-500 font-bold whitespace-nowrap">
              LIKE A PRO
            </h2>
          </div>
          <div className="col-span-2"></div>

          <div className="col-span-1"></div>
          <div className="col-span-6 flex items-center justify-center ">
            <p className="text-6xl md:text-7xl xl:text-9xl text-white whitespace-nowrap">
              มาลองจนกว่าจะเจอ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
