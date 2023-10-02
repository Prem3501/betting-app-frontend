import React from "react";
import "./Bonus.css";

function Bonus() {
  return (
    <div>
      <div className="Bonus " id="Bonus">
        <h1 className="b-head  d-flex"> Bonus List </h1>
        <div className="line mb-3">
          <div className="horizontal-line"></div>
          <div className="no-data">No Wager Bonus is Available this Time </div>
          <div className="horizontal-line"></div>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Bonus;
