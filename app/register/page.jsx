import React from "react";
import Layout from "@/components/Layout";
import RegisterForm from "./RegisterForm";
import Image from "next/image";
import BuCartoon from "@/public/bu_cartoon_logo.svg";

const Page = () => {
  return (
    <Layout>
      <div className="relative min-h-screen w-full grid grid-rows-[1fr_2fr_1fr]">
        {/* Diagonal rectangle decorative element */}
        <div className="absolute inset-0 -z-10 transform -rotate-12 origin-center">
          <div className="bg-red-500 w-[200%] h-[500px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        {/* Header Section */}
        <div className="flex justify-center items-center z-20">
          <h1 className="text-5xl md:text-8xl xl:text-9xl">
            BU OPEN HOUSE 2024
          </h1>
        </div>

        {/* Middle Section containing the form */}
        <div className="flex justify-center items-center z-20">
          <div className="bg-[#fff8e6] rounded-xl w-11/12 max-w-[700px] p-6 md:p-12 shadow-lg">
            <RegisterForm />
          </div>
        </div>

        {/* Footer or logo section */}
        <div className="flex justify-center items-center z-20">
          <Image
            src={BuCartoon}
            alt="Logo"
            width={300}
            height={300}
            className="w-40 h-auto"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Page;
