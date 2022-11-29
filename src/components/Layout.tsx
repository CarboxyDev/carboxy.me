import Footer from "./Footer";
import Navbar from "./Navbar";
import { AnalyticsWrapper } from "./analytics";

const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar></Navbar>
      <main>
        {children}
        <AnalyticsWrapper />
      </main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
