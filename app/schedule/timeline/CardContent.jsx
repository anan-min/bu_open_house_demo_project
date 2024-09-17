import React from "react";
import Image from "next/image";
import bu_cartoon from "@/public/mascot_3.svg";

const CardContent = ({
  image = bu_cartoon,
  main = "main content",
  sub = "sub content",
}) => {
  return (
    <>
      <li className=" hover:bg-gray-700 sarabun-font z-40">
        <a href="" className="items-center block sm:flex p-3">
          <Image
            className="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0"
            src={image}
            alt="image"
          />

          <div>
            <div className="text-md sm:text-lg font-bold">{main}</div>
            <div className=" sm:text-sm md:text-md font-normal text-gray-400">
              {sub}
            </div>
          </div>
        </a>
      </li>
    </>
  );
};

export default CardContent;
