import React from "react";
import Layout from "@/components/Layout";
import Map from "../contact/Map";
import LocationInfo from "../contact/LocationInfo";
import Decorations from "../contact/Decorations";

const Page = () => {
  return (
    <Layout>
      <div className="relative">
        <div className="p-6 md:grid md:grid-cols-2 bg-slate-900">
          <section>
            <LocationInfo />
          </section>
          <section className="pt-12 md:p-12 md:pt-16">
            <Map />
          </section>
        </div>

        <Decorations />
      </div>
    </Layout>
  );
};

export default Page;
