import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar-all.css';
import logoImage from '../images/5_1.png'; 
import wallet from '../images/wallet.png';
import deposit from '../images/deposit.png';
import setting from '../images/setting.png';
import avatar from '../images/avatar.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-section">
        <img src={logoImage} alt="Logo" className="logo" />
        <h3>Betzhub</h3>
      </div>
      <div className="center-section">
        <div className="nav-buttons-container">
          <Link to="/sports" className="nav-button sports-button">
            Sports
          </Link>
          <Link to="/casino" className="nav-button">
            Casino
          </Link>
          <Link to="/inplay" className="nav-button">
            Inplay
          </Link>
        </div>
      </div>
      <div className="right-section">
        <div className="right-buttons-container">
          <button className="icon-button">
            <img src={wallet} alt="Wallet" />
          </button>
          <button className="icon-button">
            <img src={deposit} alt="Deposit" />
          </button>
          <button className="icon-button" >
            <img src={setting} alt="Settings" />
          </button>
          <div className="avatar-container">
            <img src={avatar} alt="Avatar" />
            <div className="account-dropdown">
              {/* Dropdown content here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
