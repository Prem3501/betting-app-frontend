import React from "react";
import imageSrc from '../images/rectangle-121@2x.png'; // Import the image

function ImageBanner({ alt }) {
  return (
    <div className="image-banner">
      <img src={imageSrc} alt={alt}  width="1000" // Adjust the width as needed to make the image larger
      height="300" style={{marginLeft:'330px'}}/>
    </div>
  );
}

export default ImageBanner;
