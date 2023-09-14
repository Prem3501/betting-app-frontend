import React from 'react';
import Sidebar from '../component/sidebar';
import Navbar from "../component/Navbar";
import Heroimagebanner from "../component/Heroimagebanner";
import Footerall from "../component/Footerall";
import CenterContentRes from "../component/CenterContentRes";
import Rightsmallbanner from "../component/Rightsmallbanner";
import "./ResponsibleGambling.css";



function Responsiblegambling() {
  return (
    <div>
    <Navbar />
    <Rightsmallbanner />
     <Heroimagebanner /> 
     
     <Sidebar />
     <CenterContentRes />
     <Footerall />
     
    </div>
  );
}

export default Responsiblegambling;
