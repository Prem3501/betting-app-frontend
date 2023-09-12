import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Mc.css';
import inplayImage from '../images/inplay.svg';
import cricketImage from '../images/cricket.svg';
import tennisImage from '../images/tennis.svg';
import soccerImage from '../images/soccer.svg';
import starImage from '../images/star.svg';
import australianSportsImage from '../images/australiansports.svg';
import esportsImage from '../images/esports.png';


const ButtonRow1 = () => {
  const imageSize = {
    width: '25px',
    height: '25px',
  };

  const buttonsData = [
    { name: 'Inplay', imageSrc: inplayImage, notification: 2 },
    { name: 'Cricket', imageSrc: cricketImage, notification: 5 },
    { name: 'Tennis', imageSrc: tennisImage, notification: 1 },
    { name: 'Soccer', imageSrc: soccerImage, notification: 3 },
    { name: 'SPACE', imageSrc: starImage, notification: 9 },
    { name: 'Australian Rules', imageSrc: australianSportsImage, notification: 77 },
    { name: 'Esports', imageSrc: esportsImage, notification: 97 },
  ];

  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (index) => {
    setSelectedButton(index);
  };

  const renderContent = () => {
    if (selectedButton !== null) {
      // Define different content for each button here
      const content = [
        // Content for 'Inplay' button
        <div key="inplay-content" className="container">

        </div>,

        // Content for 'Cricket' button
        <table key="cricket-content" className="table">
          <thead>
            <tr>
              <th>Cricket Table</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Content for Cricket</td>
            </tr>
          </tbody>
        </table>,

        // Content for 'Tennis' button
        <table key="tennis-content" className="table">
          <thead>
            <tr>
              <th>Tennis Table</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Content for Tennis</td>
            </tr>
          </tbody>
        </table>,

        // Content for 'Soccer' button
        <table key="soccer-content" className="table">
          <thead>
            <tr>
              <th>Soccer Table</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Content for Soccer</td>
            </tr>
          </tbody>
        </table>,

        // Content for 'SPACE' button
        <table key="space-content" className="table">
          <thead>
            <tr>
              <th>SPACE Table</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Content for SPACE</td>
            </tr>
          </tbody>
        </table>,

        // Content for 'Australian Rules' button
        <table key="australianrules-content" className="table">
          <thead>
            <tr>
              <th>Australian Rules Table</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Content for Australian Rules</td>
            </tr>
          </tbody>
        </table>,

        // Content for 'Esports' button
        <table key="esports-content" className="table">
          <thead>
            <tr>
              <th>Esports Table</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Content for Esports</td>
            </tr>
          </tbody>
        </table>,
      ];

      // Return content for all buttons when 'Inplay' button is selected
      if (selectedButton === 0) {
        return content;
      }

      // Return content for the selected button only
      return content[selectedButton];
    }
  };

  useEffect(() => {
    // Set the "Inplay" button as initially selected when the component loads
    handleButtonClick(0);
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="button-row">
            {buttonsData.map((button, index) => (
              <div key={index} className="button-container">
                <button
                  className={`button position-relative ${selectedButton === index ? 'active' : ''}`}
                  onClick={() => handleButtonClick(index)}
                >
                  <img src={button.imageSrc} alt={button.name} style={imageSize} />
                  <br />
                  {button.name}
                  {button.notification > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                      {button.notification}
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                        {button.notification}
                      </span>
                    </span>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="content-container">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default ButtonRow1;
