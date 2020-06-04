/////////////////////////import React from 'react'
import NavBar from "../navbar/navbar";
import Footer from "../footer/footer";

const DefaultLayout = ({ children }) => {
  return (
    <>
      {/* nav bar */}
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
