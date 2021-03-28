import PropTypes from "prop-types";
import React from "react";
import SmartOutline from "./utils/SmartOutline";

function Layout({ children }) {
  return (
    <>
      <SmartOutline />
      <main className="font-medium">{children}</main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
