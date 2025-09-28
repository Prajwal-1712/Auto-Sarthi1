import React from 'react';
import './Home.css'; // Style as per design

function Home() {
  return (
    <div className="homepage-bg">
      <div className="homepage-overlay">
        <h1>Book Your Rickshaw<br />in Seconds</h1>
        <p className="subheading">
          Fast, reliable, and affordable auto-rickshaw rides at your fingertips. Get wherever you need to go with just a tap.
        </p>
        <div className="search-card">
          <input type="text" placeholder="Pickup location" className="location-input" />
          <input type="text" placeholder="Drop location" className="location-input" />
          <button className="find-btn">Find Rickshaw</button>
        </div>
        <div className="features-row">
          <div className="feature-item">
            <span className="feature-icon">🚀</span>
            <h3>Quick Booking</h3>
            <p>Book in under 30 seconds</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">💰</span>
            <h3>Fair Pricing</h3>
            <p>Transparent, upfront costs</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">📱</span>
            <h3>Live Tracking</h3>
            <p>Track your ride in real-time</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
