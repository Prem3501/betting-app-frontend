// AboutUs.js
import React from "react";
import Sidebarj from "../component/Sidebar-jami";
import Navbarall from "../component/Navbar-all";
import Heroimagebanner from "../component/Heroimagebanner";
import CenterContainer from "../component/CenterContainer";
import Rightsmallbanner from "../component/Rightsmallbanner";
import Rightlongbanner from "../component/Rightlongbanner";
import Footer from "../component/Footerall";
import "./About.css";

function AboutUs() {
  return (
    <div>
      <Navbarall />
      <Heroimagebanner />
      <Sidebarj />
      <Rightsmallbanner />
      <CenterContainer />
      <br />
      <br />
      <br />
      <br />
      <Rightlongbanner />
      <Footer />
    </div>
  );
}

export default AboutUs;
