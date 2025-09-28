import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="auto-sarathi-container">
      <div className="auto-sarathi-inner">
        <h2 className="main-title">About </h2>
        <p className="subtitle">
          We’re revolutionizing urban transportation by making auto-rickshaw rides more accessible, reliable, and convenient for everyone.
        </p>

        <div className="content-row">
          <div className="mission-col">
            <h3 className="mission-title">Our Mission</h3>
            <p>
              At Auto-Sarathi, we believe that transportation should be affordable, reliable, and accessible to all. We're bridging the gap between traditional auto-rickshaw services and modern technology to create a seamless experience for both riders and drivers.
            </p>
            <p>
              Our platform empowers drivers with better earning opportunities while providing passengers with transparent pricing, real-time tracking, and guaranteed availability.
            </p>
          </div>

          <div className="info-cards-grid">
            <InfoCard icon="👥" count="50,000+" label="Happy Customers" iconColor="#FEDD37" />
            <InfoCard icon="🎖️" count="25+" label="Cities Covered" iconColor="#FEDD37" highlightCount />
            <InfoCard icon="🛡️" count="10,000+" label="Daily Rides" iconColor="#FEDD37" />
            <InfoCard icon="❤️" count="5,000+" label="Driver Partners" iconColor="#FEDD37" />
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoCard = ({ icon, count, label, iconColor, highlightCount }) => (
  <div className="info-card">
    <span className="info-icon" style={{ color: iconColor }}>{icon}</span>
    <span className={`info-value ${highlightCount ? "highlight" : ""}`}>{count}</span>
    <span className="info-label">{label}</span>
  </div>
);

export default About;
