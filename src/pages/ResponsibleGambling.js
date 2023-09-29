import React from "react";
import Sidebar from "../component/sidebar";
import Navbarall from "../component/Navbar-all";
import Heroimagebanner from "../component/Heroimagebanner";

import CenterContentRes from "../component/CenterContentRes";
import Rightsmallbanner from "../component/Rightsmallbanner";
import Rightlongbanner from "../component/Rightlongbanner";
import "./ResponsibleGambling.css";

function Responsiblegambling() {
  return (
    <div>
      <Navbarall />
      <Rightsmallbanner />
      <Heroimagebanner />

      <Sidebar />
      <Rightlongbanner />
      <CenterContentRes />
    </div>
  );
}

export default Responsiblegambling;
