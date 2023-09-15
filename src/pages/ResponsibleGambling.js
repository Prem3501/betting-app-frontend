import React from 'react';
import Sidebar from '../component/sidebar';
import Navbarall from "../component/Navbar-all";
import Heroimagebanner from "../component/Heroimagebanner";
import Footerall from "../component/Footerall";
import CenterContentRes from "../component/CenterContentRes";
import Rightsmallbanner from "../component/Rightsmallbanner";
import Rightlongbanner from '../component/Rightlongbanner';
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
     <Footerall />
     
    </div>
  );
}

export default Responsiblegambling;
