import Layout from "../components/Layout";
import Gallery from "../components/home/Gallery";
import HeroBanner from "../components/home/HeroBanner";
import FlipCard from "../components/FlipCard";

export default function Home() {
  return (
    <>
      <Layout>
        {/* <Gallery />
        <HeroBanner /> */}
        <FlipCard />
      </Layout>
    </>
  );
}
