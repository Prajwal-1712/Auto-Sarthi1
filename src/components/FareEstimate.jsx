import React, { useState } from "react";
import "./FareEstimate.css";

function FareEstimate() {
  const [distance, setDistance] = useState('');

  return (
    <div className="fare-bg">
      <div className="fare-card">
        <h1 className="fare-title">FARE ESTIMATION</h1>
        <p className="fare-subtitle">
          Get an instant estimate of your rickshaw fare before you book.
        </p>
        <h2 className="fare-calc-title">
          <span role="img" aria-label="calculator" className="fare-icon">🧮</span>
            FARE CALCULATE 
        </h2>
        <input
          type="number"
          placeholder="Enter distance in kilometers"
          value={distance}
          onChange={e => setDistance(e.target.value)}
          className="fare-input"
        />
        <button className="fare-btn">Calculate </button>
        <div className="fare-structure">
          <div className="fare-structure-title">Fare Structure</div>
          <div className="fare-structure-row">Base Fare: <span>₹20</span></div>
          <div className="fare-structure-row">Per Kilometer: <span>₹12</span></div>
          <div className="fare-structure-row">Waiting Charges: <span>₹2/min (after 5 min)</span></div>
        </div>
        <div className="fare-note">
          * Actual fare may vary based on traffic conditions and route taken
        </div>
      </div>
    </div>
  );
}

export default FareEstimate;
