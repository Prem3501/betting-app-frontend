
// AboutUs.js
import React from "react";
import Sidebar from "../component/sidebar"; 
import Navbarall from "../component/Navbar-all";
import Heroimagebanner from "../component/Heroimagebanner";
import CenterContainer from "../component/CenterContainer";
import Footerall from "../component/Footerall";
import Rightsmallbanner from "../component/Rightsmallbanner";
import Rightlongbanner from "../component/Rightlongbanner";
import './About.css';




function AboutUs() {
  return (
    <div>
    <Navbarall />
    <Rightsmallbanner />
    <Heroimagebanner />
    <Sidebar />
    <Rightlongbanner />
    <CenterContainer />
    
    <Footerall />
      
    </div>
  );
}

export default AboutUs;

