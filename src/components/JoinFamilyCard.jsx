import React from 'react';
import './JoinFamilyCard.css';

function JoinFamilyCard() {
  return (
    <div className='join-bg'>
    <div className="join-family-card">
      <h2 className="join-title">Join Our Growing Family</h2>
      <p className="join-description">
        Whether you're a rider looking for convenient transportation or a driver seeking better earning opportunities, Auto-Sarathi is here for you.
      </p>
      <div className="join-buttons">
        <button className="join-btn fill">Start Riding</button>
        <button className="join-btn outline">Become a Driver</button>
      </div>
    </div>
    </div>
  );
}

export default JoinFamilyCard;
