import React from "react";
import Sidebar from "../component/Sidebar-jami";
import Navbarall from "../component/Navbar-all";
import Heroimagebanner from "../component/Heroimagebanner";
import CenterTerms from "../component/CenterTerms";

import Rightsmallbanner from "../component/Rightsmallbanner";
import Rightlongbanner from "../component/Rightlongbanner";
import Footer from "../component/Footerall";

function Termsandcondition() {
  return (
    <div>
      <Navbarall />
      <Sidebar />
      <Heroimagebanner />
      <Rightsmallbanner />
      <CenterTerms />
      <Footer />
    </div>
  );
}

export default Termsandcondition;
