import React from "react";
import Navbarall from "../component/Navbar-all";
import Sidebarj from "../component/Sidebar-jami";
import Heroimagebanner from "../component/Heroimagebanner";
import Rightsmallbanner from "../component/Rightsmallbanner";
import Rightlongbanner from "../component/Rightlongbanner";
import Test from "../component/Test";
import Footerall from "../component/Footerall";

function Sports() {
  return (
    <div>
      <Navbarall />
      <Sidebarj />
      <Heroimagebanner />
      <Rightsmallbanner />

      <Test />
      <Rightlongbanner />
      <Footerall />
    </div>
  );
}

export default Sports;
