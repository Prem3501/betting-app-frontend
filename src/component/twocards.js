import React from 'react';
import './twocards.css';
import sports from '../images/12.png';
import casino from '../images/13.png';

function Twocards() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <img src={sports} className="card-img-top" alt="Sports" />
            <div className="card-body">
              <h5 className="card-title mb-2">Sports</h5>
              <p className="card-text mb-2">
                Our team continues to work hard to make something special for all sports. We are very confident that we can exceed our players' expectations for a perfect gaming experience which encompasses a product with a wide variety of markets for punters to choose from .<br/>
              </p>
              <p className="card-text">We offer many different types of sports to bet on. Some of the most popular ones are definitely cricket, football, tennis, basketball, horse racing, and many more.<br/> <br/></p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card ">
            <img src={casino} className="card-img-top" alt="Casino" />
            <div className="card-body">
              <h5 className="card-title">Casino</h5>
              <p className="card-text mb-2">
                We’ve all grown to love the typical brick and mortar casino but there’s just something about online casino that triumphs over the rest. 
                At 3rdEmpire, we believe that playing casino online should be an experience of its own. With thousands of titles available at the click of a button, <br/><br/> it’s become possible to play casino online from the comfort of your home.
                All the while, sit back and immerse yourself in a world of mythical creatures and vigorous jokers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Twocards;
