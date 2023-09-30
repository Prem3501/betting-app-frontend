import React from "react";
import logo from "../images/5_1.png";
import payment from "../images/payment.png";
import { BsWhatsapp, BsTwitter } from "react-icons/bs";
import "./Footerall.css";

function Footer() {
  const footerLogoStyle = {
    display: "flex",
    alignContent: "space-between",
    flexWrap: "wrap",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginTop: "-21pc",
    marginRight: "7pc",
    flexDirection: "row",
  };

  const paymentImageStyle = {
    width: "100px",
    height: "100px",
  };

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
          <div style={footerLogoStyle} id="footer-logo">
            <img
              id="payment"
              alt=""
              src={logo}
              width="100"
              height="100"
              className="d-inline-block align-top d-flex justify-center"
            />
            <h5 style={{ marginLeft: "2px", marginBottom: "0px" }}>BETZHUB</h5>
          </div>
        </div>
        <div class="col-md-4" style={{ marginTop: "-16pc" }}>
          <h4>100% safe & Instant payments</h4>
        </div>
        <div class="col-md-4" style={{ marginTop: "-16pc" }}>
          <h4>Accepted Modes of Payments</h4>
        </div>
      </div>
      <br />

      <div className="row">
        <div class="col-md-4" style={{ marginTop: "-14pc" }}>
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
          <div className="row">
            <div className="col-md-1" id="so-icon">
              <BsWhatsapp style={{ width: "30px", height: "30px" }} />
            </div>
            <div className="col-lg m-2">WhatsApp</div>
            <div className="col-md-1" id="so-icon">
              <BsTwitter
                style={{
                  width: "30px",
                  height: "30px",
                  color: "black",
                  marginLeft: "2px",
                }}
              />
            </div>
            <div className="col-lg m-2">Twitter</div>
          </div>
          <br />
          &copy; Copyright 2023 Betzhub
        </div>
        <div class="col-md-4" style={{ marginTop: "-12pc" }}>
          You can make payments and receive earnings instantly via your UPI ID -
          so you can be sure that your money is safe and secure. All UPI
          platforms are accepted.
        </div>
        <div class="col-md-4" style={{ marginTop: "-12pc" }}>
          <img
            alt=""
            src={payment}
            width="110%"
            height="20%"
            class="d-inline-block align-top"
            style={{ marginLeft: "-25px" }}
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
