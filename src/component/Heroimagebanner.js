import React from "react";
import imageSrc from "../images/rectangle-121@2x.png"; // Import the image
import "./Heroimagebanner.css";

function ImageBanner() {
  return (
    <div className="container" id="Hero-image-banner">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-6" id="banner-img">
          <img src={imageSrc} alt="" className="img-fluid" id="img-banner" />
        </div>
      </div>
    </div>
  );
}

export default ImageBanner;
