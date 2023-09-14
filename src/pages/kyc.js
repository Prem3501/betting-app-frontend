import React from 'react';
import Sidebar from '../component/sidebar';
import Navbar from "../component/Navbar";
import Heroimagebanner from "../component/Heroimagebanner";
import CenterContainerKYC from '../component/CenterContainerKYC';
import Footerall from "../component/Footerall";
import Rightsmallbanner from "../component/Rightsmallbanner"
import './KYC.css';
// import Rightlongbanner from '../component/Rightlongbanner';

function Kyc() {
  return (
    <div>
    <Navbar />
    
    <Rightsmallbanner />
    <Heroimagebanner /> 
    <CenterContainerKYC />
    <Sidebar /> 
    <Footerall />
    
    
  
   
    </div>
  );
}

export default Kyc;
