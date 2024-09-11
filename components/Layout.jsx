import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />

      <main className="d-flex flex-col min-h-screen pt-20 md:pt-24 lg:pt-20">
        {children}
      </main>

      <Footer />
    </>
  );
};

export default Layout;
