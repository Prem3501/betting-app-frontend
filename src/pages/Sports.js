import React from "react";
import Navbarall from "../component/Navbar-all";
import Sidebar from "../component/sidebar";
import Heroimagebanner from "../component/Heroimagebanner";
import Rightsmallbanner from "../component/Rightsmallbanner";
import Rightlongbanner from "../component/Rightlongbanner";
import Test from "../component/Test";

import Footerall from "../component/Footerall";

function Sports() {
  return (
    <div>
      <Navbarall /> <br /> <br /> <br /> <br /> <br />
      <Rightsmallbanner />
      <Heroimagebanner />
      <Sidebar />
      <Rightlongbanner />
      <Test />
      <Footerall />
    </div>
  );
}

export default Sports;
