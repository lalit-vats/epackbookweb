import React from "react";
import Header from "../Pages/Header";
import Footer from "../Pages/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
