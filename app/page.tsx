import Layout from "../components/Layout";
import Gallery from "../components/home/Gallery";
import HeroBanner from "../components/home/HeroBanner";

export default function Home() {
  return (
    <>
      <Layout>
        <Gallery />
        <HeroBanner />
      </Layout>
    </>
  );
}
