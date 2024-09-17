import React from "react";
import Image from "next/image";
import mascot_international from "@/public/mascot_international.svg";
import star from "@/public/star.svg";

const Decorations = () => {
  return (
    <>
      <Image
        src={mascot_international}
        alt="mascot_international"
        className="absolute animate-shake bottom-0 left-[0rem] w-24 rotate-12 xl:w-36 md: animate-flip md:left-10"
      />

      <Image
        src={star}
        alt="star"
        className="absolute animate-spin top-2 right-2 w-12 md:top-8"
      />
    </>
  );
};

export default Decorations;
