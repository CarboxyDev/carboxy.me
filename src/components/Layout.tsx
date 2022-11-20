import CarbonNavbar from "./Carbon/CarbonNavbar";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AnalyticsWrapper } from "./analytics";

const Layout = ({ children }: any) => {
  return (
    <>
      <CarbonNavbar></CarbonNavbar>
      <main>
        {children}
        <AnalyticsWrapper />
      </main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
