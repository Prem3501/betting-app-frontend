import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import SignInPopup from "./signin";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./register";
import logo from "../images/5_1.png";

function CollapsibleExample() {
  const [showSignInPopup, setShowSignInPopup] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleSignInClick = () => {
    setShowSignInPopup(true);
    setShowRegister(false);
  };

  const handleRegisterClick = () => {
    setShowRegister(true);
    setShowSignInPopup(false);
  };

  const handleClosePopup = () => {
    setShowSignInPopup(false);
    setShowRegister(false);
  };

  return (
    <Navbar collapseOnSelect expand="lg" id="navbar">
      <Container>
        <Navbar.Brand href="#home" className="custom-navbar-brand">
          <img
            alt=""
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
          />{" "}
          <span id="brand">BETZHUB</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="me-auto"
            style={{
              marginLeft: "16pc",
            }}
          >
            <Nav.Link href="/Sports" id="custom-nav-link">
              Sports
            </Nav.Link>
            <Nav.Link href="/Casino" id="custom-nav-link">
              Casino
            </Nav.Link>
            <Nav.Link href="/Inplay" id="custom-nav-link">
              Inplay
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#signin" id="nav-link" onClick={handleSignInClick}>
              Sign In
            </Nav.Link>
            <Nav.Link
              href="#register"
              id="nav-link"
              onClick={handleRegisterClick}
            >
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      {showSignInPopup && <SignInPopup onClose={handleClosePopup} />}
      {showRegister && <Register onClose={handleClosePopup} />}
    </Navbar>
  );
}

export default CollapsibleExample;
