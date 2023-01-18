import React from "react";
import NavbarTop from "./NavbarTop";
import NavbarLeft from "./NavbarLeft";
import Dashboard from "./Dashboard";

const Layout = () => {
  return (
    <div className="layout">
      <NavbarTop />
      <div className="layout_bottom">
        <NavbarLeft />
        <Dashboard />
      </div>
    </div>
  );
};

export default Layout;
