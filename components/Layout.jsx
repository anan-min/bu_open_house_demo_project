import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="mt-2 pt-20 min-h-screen flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
