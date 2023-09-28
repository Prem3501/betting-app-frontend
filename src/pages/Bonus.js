import React from 'react'; // Use curly braces around 'React'

import Navbarll from '../component/Navbar-all';
import Sidebar from '../component/sidebar';
import Footerall from '../component/Footerall';
import Rightsmallbanner from '../component/Rightsmallbanner';
import Rightlongbanner from '../component/Rightlongbanner';


function Bonus() {
  return (
    <div>
      <Navbarll />
       <Rightsmallbanner />
       <Sidebar />
      <Rightlongbanner />
      <Footerall />
    </div>
  );
}

export default Bonus;
