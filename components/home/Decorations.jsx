import React from "react";
import Image from "next/image";
import star from "@/public/star.svg";
import mascot_3 from "@/public/mascot_3.svg";
const Decorations = () => {
  return (
    <>
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

      <Image
        src={mascot_3}
        alt="mascot 3 image"
        style={{ transform: "rotate(20deg)" }}
        className="absolute  animate-bounce top-32 right-8 w-48 xl:right-48 xl:w-80"
      />
    </>
  );
};

export default Decorations;
