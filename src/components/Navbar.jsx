import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/auto-sarathi-logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <img src={logo} alt="AutoSarathi Logo" />
      </div>

      {/* Hamburger */}
      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Links */}
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
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
