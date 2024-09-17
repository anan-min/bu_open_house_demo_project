import React from "react";
import Layout from "@/components/Layout";
import Timeline from "@/app/schedule/timeline/Timeline";
import Decorations from "./Decorations";

const page = () => {
  return (
    <Layout>
      <div className="relative">
        <Timeline />
        <Decorations />
      </div>
    </Layout>
  );
};

export default page;
