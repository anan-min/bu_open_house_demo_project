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
      <li className=" hover:bg-gray-700">
        <a href="" class="items-center block p-3 sm:flex ">
          <Image
            class="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0"
            src={image}
            alt="image"
          />

          <div class="text-gray-400">
            <div class="text-lg font-normal">{main}</div>
            <div class="text-md font-normal">{sub}</div>
          </div>
        </a>
      </li>
    </>
  );
};

export default CardContent;
