import React from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/sidebar";
import Heroimagebanner from "../component/Heroimagebanner";


function SportsMainscreen(){
    return(
        <div>
        <Navbar />
        <Heroimagebanner />
        <Sidebar />
        </div>
    )

}

export default SportsMainscreen;