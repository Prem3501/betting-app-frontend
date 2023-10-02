import React from "react";
import Navbar from "../component/Navbar-all";
import Sidebar from "../component/Sidebar-jami";
import Footer from "../component/Footer-user";
import Profile from "../component/Profilescreen";
const Userprofile = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Profile />
      <Footer />
    </div>
  );
};

export default Userprofile;
