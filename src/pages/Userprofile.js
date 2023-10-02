import React from "react";
import Navbarall from "../component/Navbar-all";
import Sidebar from "../component/Sidebar-jami";
import Footerall from "../component/Footerall";
import Profile from "../component/Profilescreen";

function Userprofile() {
  return (
    <div>
      <Navbarall />
      <Sidebar />
      <Profile />
    </div>
  );
}

export default Userprofile;
