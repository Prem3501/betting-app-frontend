import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './SideComponent.css'; // Import the CSS file for SideComponent


import Bonus from './images/screenshot-4-1@2x.png';

function SideComponent() {
  return (
    <div>
       {/* Your main content */}
          <div>
            <h3>| Bet List | Recent Activity |  Promotions  |</h3>
            <img alt="" src={Bonus}width="300px" height="250px"/>
          </div>
          {/* Content below the image */}
          
        </div>
    
  );
}