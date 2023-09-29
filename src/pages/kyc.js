import React from "react";
import Sidebar from "../component/sidebar";
import Navbarall from "../component/Navbar-all";
import Heroimagebanner from "../component/Heroimagebanner";
import CenterContainerKYC from "../component/CenterContainerKYC";

import Rightsmallbanner from "../component/Rightsmallbanner";
import Rightlongbanner from "../component/Rightlongbanner";
import "./KYC.css";
// import Rightlongbanner from '../component/Rightlongbanner';

function Kyc() {
  return (
    <div>
      <Navbarall />

      <Rightsmallbanner />
      <Heroimagebanner />
      <CenterContainerKYC />
      <Sidebar />
      <Rightlongbanner />
    </div>
  );
}

export default Kyc;
