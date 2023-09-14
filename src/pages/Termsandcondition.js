import React from 'react';
import Sidebar from '../component/sidebar';
import Navbar from "../component/Navbar";
import Heroimagebanner from "../component/Heroimagebanner";
import CenterTerms from "../component/CenterTerms"
import Footerall from "../component/Footerall"
import Rightsmallbanner from "../component/Rightsmallbanner";
import "./Termsandconditon.css";


function Termsandcondition() {
  return (
    <div>
   <Navbar />
   <Rightsmallbanner />
   <Heroimagebanner />
   <Sidebar />
   <CenterTerms />
   <Footerall />
   
    
    </div>
  );
}

export default Termsandcondition;
