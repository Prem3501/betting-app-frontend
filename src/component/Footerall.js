import React from "react";
import WhatsAppButton from "./subfooter";
import logo from "../images/5_1.png";
import payment from "../images/payment.png";
import "./Footerall.css";

function Footer() {
  return (
    <div className="footer-container" id="footer-all">
      <div className="row mt-3">
        <div className="col-md-4">
          <div className="group-child53" />
        </div>
        <div className="col-md-6"></div>
      </div>
      <br />

      <div className="row">
        <div className="col-md-4">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              id="payment"
              alt=""
              src={logo}
              width="100"
              height="100"
              className="d-inline-block align-top"
            />
            <h5 style={{ marginLeft: "2px", marginBottom: "0" }}>BETZHUB</h5>
          </div>
        </div>
        <div className="col-md-4 mt-4">
          <h4>100% safe & Instant payments</h4>
        </div>
        <div className="col-md-4 mt-4">
          <h4>Accepted Modes of Payments</h4>
        </div>
      </div>
      <br />

      <div className="row">
        <div className="col-md-4">
          Betzhub.co is Asia’s one of the biggest gaming platforms with over 350
          games and sports available.
          <br />
          <br />
          Popular sports such as Cricket, Tennis, Football, Basketball,
          Volleyball and many more including Indian card games like Teen Patti
          and Andar Bahar are also available from various worldwide gaming
          providers.
          <br />
          <br />
          With unlimited markets and odds, betzhub.co gives players the best
          gaming experience in the market.
          <br />
          <br />
          <br />
          <WhatsAppButton phoneNumber="1234567890"> </WhatsAppButton>
          <br />
          &copy; Copyright 2010 - 2023 Betzhub
        </div>
        <div className="col-md-4 mt-1">
          You can make payments and receive earnings instantly via your UPI ID -
          so you can be sure that your money is safe and secure. All UPI
          platforms are accepted.
        </div>
        <div className="col-md-4">
          <img
            alt=""
            src={payment}
            width="120%"
            height="30%"
            className="d-inline-block align-top"
            style={{ marginLeft: "-35px" }}
          />
          <br />
          <br />
          <center>Contact Us</center>
          <br />
          <center>WhatsApp: 919940941959</center>
          <center>Calling: 919940941959</center>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Footer;
