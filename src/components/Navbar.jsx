import React from 'react';
import "./Navbar.css"


function Navbar() {
  return (
   <nav className="navbar">
  <div className="navbar-logo">
    <span style={{ color: '#FFD600' }}>Auto-</span>
    <span style={{ color: '#222' }}>Sarathi</span>
  </div>
  <div className="navbar-links">
    <a href="#">Home</a>
    <a href="#">How It Works</a>
    <a href="#">Fare Estimation</a>
    <a href="#">About Us</a>
    <a href="#">Contact Us</a>
    <button className="book-now-btn">Book Now</button>
  </div>
</nav>

  );
}

export default Navbar;
