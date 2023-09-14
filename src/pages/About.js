
// AboutUs.js
import React from "react";
import Sidebar from "../component/sidebar"; 
import Navbar from "../component/Navbar";
import Heroimagebanner from "../component/Heroimagebanner";
import CenterContainer from "../component/CenterContainer";
import Footerall from "../component/Footerall";
import Rightsmallbanner from "../component/Rightsmallbanner";
import './About.css';




function AboutUs() {
  return (
    <div>
    <Navbar />
    <Rightsmallbanner />
    <Heroimagebanner />
    <Sidebar />
    
    <CenterContainer />
    <Footerall />
      
    </div>
  );
}

export default AboutUs;

