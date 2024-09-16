import React from "react";
import Layout from "@/components/Layout";

import Decorations from "./Decorations";
import FaqCards from "./FaqCards";
import Header from "./Header";

const Page = () => {
  return (
    <Layout>
      <div className="relative min-h-screen bg-[#fff8e6]">
        <Decorations />

        <div className="relative flex flex-col items-center justify-center min-h-screen pt-2 z-10">
          <Header />
          <FaqCards />
        </div>
      </div>
    </Layout>
  );
};

export default Page;
