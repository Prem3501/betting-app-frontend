import React from "react";
import './SportsScreen.css';

import Sidebar from "../component/sidebar"; 
import Navbar from "../component/Navbar";
import Heroimagebanner from "../component/Heroimagebanner";
import Test from "../component/Test";
import Rightsmallbanner from '../component/Rightsmallbanner';
import Footerall from "../component/Footerall";




function SportsScreen() {
  return (
    <div>
      <Navbar />
      <Rightsmallbanner />
      <Heroimagebanner /> 
      <Sidebar />
       <Test />
       <Footerall />
    </div>
  );
}

export default SportsScreen;