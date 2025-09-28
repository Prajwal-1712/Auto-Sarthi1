import React from 'react';
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => (
  <footer className="footerbg">
    <div className='footer'>
    <div className="footer-top">
      <div className="footer-col brand-col">
        <h2 className="brand-title"><span className="yellow">Auto-</span>Sarathi</h2>
        <p>
          Making urban transportation accessible, reliable, and convenient for everyone through technology and innovation.
        </p>
        <div className="social-icons">
          <a href="#"><i class="bi bi-facebook"></i></a>
          <a href="#"><i class="bi bi-twitter"></i></a>
          <a href="#"><i class="bi bi-instagram"></i></a>
          <a href="#"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
      <div className="footer-col">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">How It Works</a></li>
          <li><a href="#">Fare Estimation</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h3>Support</h3>
        <ul>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Safety Guidelines</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Driver Support</a></li>
        </ul>
      </div>
      <div className="footer-col contact">
        <h3>Contact Info</h3>
        <ul>
          <li><i class="bi bi-telephone"></i>+91 90197 95625 <span className="contact-sub">24/7 Support</span></li>
          <li><i class="bi bi-envelope"></i> support@auto-sarathi.com <span className="contact-sub">Response in 24hrs</span></li>
          <li><i class="bi bi-geo-alt"></i> Sanjay Ghodawat University, Kolhapur
            <span className="contact-sub">Maharashtra, India</span>
          </li>
        </ul>
      </div>
    </div>
    <hr />
    <div className="footer-app-row">
      <div>
        <b>Download Auto-Sarathi App</b>
        <div className="footer-app-text">
          Get the mobile app for the best experience. Book rides faster, track in real-time, and enjoy exclusive app-only features.
        </div>
      </div>
      <div className="footer-app-buttons">
        <button className="android-btn">
          <span role="img" aria-label="android">📱</span> Download for Android
        </button>
        <button className="ios-btn">
          <span role="img" aria-label="apple">🍎</span> Download for iOS
        </button>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© 2024 Auto-Sarathi. All rights reserved.</span>
      <div className="footer-legal-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Cookie Policy</a>
      </div>
    </div>
    </div>
  </footer>
);

export default Footer;
