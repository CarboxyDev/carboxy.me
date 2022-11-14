import Navbar from "./Navbar";

const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar></Navbar>
      <main>{children}</main>
    </>
  );
};

export default Layout;
