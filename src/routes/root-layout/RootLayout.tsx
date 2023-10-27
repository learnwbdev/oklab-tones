import { Outlet } from "react-router-dom";
import { Footer, NavBar } from "../..";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
