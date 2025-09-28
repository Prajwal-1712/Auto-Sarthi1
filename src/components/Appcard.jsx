import React from 'react';
import './Appcard.css';

const features = [
  {
    icon: "👥",
    title: "Community First",
    description: "We're committed to building a strong community of drivers and riders who support each other's success and safety."
  },
  {
    icon: "🛡️",
    title: "Safety & Security",
    description: "All our drivers are verified and trained. Every ride is tracked and monitored to ensure your safety and peace of mind."
  },
  {
    icon: "💛",
    title: "Social Impact",
    description: "By choosing Auto-Sarathi, you're supporting local drivers and contributing to sustainable urban transportation solutions."
  }
];

function Appcard() {
  return (
    <div className="features-container">
      {features.map((feature, idx) => (
        <div key={idx} className="feature-card">
          <div className="feature-icon">{feature.icon}</div>
          <h2 className="feature-title">{feature.title}</h2>
          <p className="feature-description">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Appcard;
