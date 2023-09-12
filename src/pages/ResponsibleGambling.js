import React from 'react';
import Sidebar from '../component/sidebar';
import Navbar from "../component/Navbar";
import Heroimagebanner from "../component/Heroimagebanner";
import Footerall from "../component/Footerall";
import CenterContentRes from "../component/CenterContentRes";



function Responsiblegambling() {
  return (
    <div>
    <Navbar />
     <Heroimagebanner /> 
     <Sidebar />
     <CenterContentRes />
     <Footerall />
     
    </div>
  );
}

export default Responsiblegambling;
