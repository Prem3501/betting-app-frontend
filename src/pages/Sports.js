import React from "react";
import Navbarall from "../component/Navbar-all";
import Sidebar from "../component/sidebar";
import Heroimagebanner from "../component/Heroimagebanner";
import Rightsmallbanner from "../component/Rightsmallbanner";
import Rightlongbanner from "../component/Rightlongbanner";

import Footerall from "../component/Footerall";



function Sports(){
    return(
        <div>
        

        <Navbarall />
        <Rightsmallbanner />
        <Heroimagebanner />
        <Sidebar />
        <Rightlongbanner /> 
        <Footerall />
        </div>
    )
}

export default Sports;
