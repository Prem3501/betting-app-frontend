import React from 'react';
import Sidebar from '../component/sidebar';
import Navbar from "../component/Navbar";
import Heroimagebanner from "../component/Heroimagebanner";
import CenterContainerKYC from '../component/CenterContainerKYC';
import Footerall from "../component/Footerall";

import './KYC.css';
// import Rightlongbanner from '../component/Rightlongbanner';

function Kyc() {
  return (
    <div>
    <Navbar />
    
    <Heroimagebanner /> 
    
    
    <CenterContainerKYC />
    
    
    <Sidebar /> 
    
    <Footerall />
    
    
  
   
    </div>
  );
}

export default Kyc;
