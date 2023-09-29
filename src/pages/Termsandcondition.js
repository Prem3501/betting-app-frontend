import React from "react";
import Sidebar from "../component/sidebar";
import Navbarall from "../component/Navbar-all";
import Heroimagebanner from "../component/Heroimagebanner";
import CenterTerms from "../component/CenterTerms";

import Rightsmallbanner from "../component/Rightsmallbanner";
import Rightlongbanner from "../component/Rightlongbanner";
import "./Termsandconditon.css";

function Termsandcondition() {
  return (
    <div>
      <Navbarall />
      <Rightsmallbanner />
      <Heroimagebanner />
      <Sidebar />
      <Rightlongbanner />
      <CenterTerms />
    </div>
  );
}

export default Termsandcondition;
