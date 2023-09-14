import React, { useState } from 'react';
import bet from '../images/rightbanner.png';
import recent from '../images/rightbanner.png';
import promotion from '../images/rightbanner.png';
import './Rightsmallbanner.css';

const ImageSwitcher = () => {
  // Initialize state to track the currently selected image
  const [selectedImage, setSelectedImage] = useState(bet);

  // Define an array of image URLs
  const images = [bet, recent, promotion];

  // Function to handle the click event and update the selected image
  const handleImageClick = (index) => {
    setSelectedImage(images[index]);
  };

  return (
    <div className='container' id="rightcomponenttop"   style={{float:"right"}}>

    
  <div class="btn-group" role="group" aria-label="Basic mixed styles example">
  < span onClick={() => handleImageClick(0)} id="name">Betlist  |</span>
  <span onClick={() => handleImageClick(1)} id="name"> Recent Activity |</span>
  <span onClick={() => handleImageClick(2)} id="name">Promotion</span>
</div>
      <img src={selectedImage} alt="Selected" id='topimage' />
    </div>
  );
};

export default ImageSwitcher;