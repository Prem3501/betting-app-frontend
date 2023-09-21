import React, { useState } from "react";
import "./signin.css";
import Register from "./register";
import fiveImage from "../images/5.png";
import Icons from "./icons";
import logo from "../images/5_1.png";
import subpayment from "../images/subpayment.png";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useHistory

const SignInPopup = ({ onClose }) => {
  const [showRegister, setShowRegister] = useState(false);
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Use useHistory

  const toggleRegister = () => {
    setShowRegister(!showRegister);
  };

  const validatePassword = (password) => {
    // Use a regular expression to validate the password
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "Password must contain at least 6 characters, including at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character."
      );
    } else {
      setErrorMessage("");
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    console.log(userDetails);
    try {
      const { data } = await axios.post(
        "http://localhost:5000/auth/login",
        userDetails
      );
      if (data.status) {
        navigate("/about"); // Use history.push to navigate
      }
    } catch (error) {
      console.log("error signing in");
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "password") {
      validatePassword(value);
    }
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div className="signInPopup">
      <div className="signInContainer">
        <button className="closeButton" onClick={onClose}>
          <span>&times;</span> {/* This creates the cross mark */}
        </button>
        <div className="container">
          <div className="row">
            <center>
              <img alt="logo" src={logo} id="logo" />
            </center>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img src={fiveImage} alt="Left Image" id="imgcard" />
              <h4 id="withdraw">
                <b>
                  100% <span>FAST</span> Withdrawal
                </b>
              </h4>
              <img
                src={subpayment}
                alt="Left Image"
                style={{ width: "100%", marginLeft: "5%" }}
              />
            </div>
            <div className="col-md-6">
              {showRegister ? (
                <Register onClose={onClose} />
              ) : (
                <form>
                  <label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Enter your Name"
                      className="responsive-input"
                      value={userDetails.username}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter your Password"
                      value={userDetails.password}
                      onChange={handleChange}
                      className="responsive-input"
                    />
                  </label>
                  <div className="error-message">{errorMessage}</div>
                  <label>
                    <input type="checkbox" name="keepLoggedIn" />
                    Keep me signed in
                  </label>
                  <button
                    type="submit"
                    className=" responsive-input" // Add this class
                    disabled={!!errorMessage} // Disable the button if there's an error message
                    onClick={handleSignIn}
                  >
                    Sign In
                  </button>
                  <p>
                    Don't have an account?{" "}
                    <a href="#" id="register" onClick={toggleRegister}>
                      Register
                    </a>
                  </p>
                  <div className="row justify-content-center">
                    <Icons phoneNumber="9940941959" />
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPopup;