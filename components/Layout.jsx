import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />

      <main className="min-h-screen pt-16 md:pt-20 lg:pt-24">{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
