import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar-all.css";
import logoImage from "../images/5_1.png";
import { CiMoneyBill } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { BiWalletAlt } from "react-icons/bi";
import { CiUser } from "react-icons/ci";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const navbarStyle = {
    backgroundColor: "red", // Set the background color to red
  };

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={navbarStyle}
      id="custom-navbar"
    >
      <div className="container-fluid" id="nav-container-all">
        <Link to="/" className="navbar-brand" id="logo-link">
          <img
            src={logoImage}
            alt="Logo"
            className="logo"
            width="50px"
            height="50px"
          />
          Betzhub
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#custom-navbarNav"
          aria-controls="custom-navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="custom-navbarNav">
          <ul className="navbar-nav mx-auto" id="nav-links">
            <li className="nav-item">
              <Link to="/Sports" className="nav-link">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Casino" className="nav-link">
                Casino
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Inplay" className="nav-link">
                Inplay
              </Link>
            </li>
          </ul>

          <div className="navbar-nav" id="icon-container">
            <button className="icon-button">
              <BiWalletAlt size={30} />
            </button>
            <button className="icon-button">
              <CiMoneyBill size={30} />
            </button>
            <button className="icon-button">
              <IoSettingsOutline size={30} />
            </button>
            <div className="avatar-container">
              <CiUser
                className="avatar-icon"
                size={30}
                onClick={toggleDropdown}
              />
              <div
                className={`account-dropdown ${dropdownVisible ? "show" : ""}`}
                id="dropdown-menu"
              >
                <Link to="/Userprofile" className="dropdown-link">
                  User Profile
                </Link>
                <Link to="/Account" className="dropdown-link">
                  Account
                </Link>
                <Link to="/Withdraw" className="dropdown-link">
                  Withdraw
                </Link>
                <Link to="/Transaction" className="dropdown-link">
                  Transaction
                </Link>
                <Link to="/Open-bets" className="dropdown-link">
                  Open Bets
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
