
// AboutUs.js
import React from "react";
import Sidebar from "../component/sidebar"; 
import Navbar from "../component/Navbar";
import Heroimagebanner from "../component/Heroimagebanner";
import CenterContainer from "../component/CenterContainer";
import Footerall from "../component/Footerall";




function AboutUs() {
  return (
    <div>
      <Navbar />
      <Heroimagebanner /> 
      <CenterContainer />
      <Sidebar />
      
      <Footerall />
    </div>
  );
}

export default AboutUs;

