import React from 'react';
import './buttonrow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faShare, faFilePen, faWallet, faTrophy } from '@fortawesome/free-solid-svg-icons';

const buttonsData = [
  { text: 'Register', icon: faFilePen },
  { text: 'Verify', icon: faCircleCheck },
  { text: 'Deposit', icon: faWallet },
  { text: 'Win', icon: faTrophy },
];

function Buttonrow() {
  return (
    <div className='row justify-content-center p-1'>
      {buttonsData.map((button, index) => (
        <div className='col-md-3 text-center' key={index}>
          <button type="button" className='btn btn-danger' id='button'>
            <FontAwesomeIcon icon={button.icon} size="2xl" style={{ color: "#ffffff", padding: "2px" }} />
            {button.text}
          </button>
          {index < buttonsData.length - 1 && (
            <div className='col-12' id='share-icon'>
              <FontAwesomeIcon icon={faShare} size="2xl" style={{ color: "#ffffff" }} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Buttonrow;
