import CarbonNavbar from "./Carbon/CarbonNavbar";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: any) => {
  return (
    <>
      <CarbonNavbar></CarbonNavbar>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
