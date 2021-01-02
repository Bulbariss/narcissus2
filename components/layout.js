import PropTypes from "prop-types";
import React from "react";
import SmartOutline from "./utils/SmartOutline";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <>
      <SmartOutline />
      <main>{children}</main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
