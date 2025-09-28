import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className="contactus-page">
      <h1 className="contactus-title">Contact Us</h1>
      <p className="contactus-subtitle">
        Have questions or need support? We're here to help you with anything you need.
      </p>
      <div className="contactus-main">
        <div className="contactus-form-card">
          <h2 className="form-title">Send us a Message</h2>
          <form className="contactus-form">
            <div className="form-row">
              <input type="text" placeholder="Your Name" className="input-half"/>
            </div>
            <div className="form-row">
              <input type="email" placeholder="Your Email" className="input-half"/>
            </div>
            <input type="text" placeholder="Your Phone Number" className="input-full"/>
            <textarea placeholder="Your Message" className="input-full textarea"/>
            <button className="send-btn" type="submit">Send Message</button>
          </form>
        </div>
        <div className="contactus-info">
          <div className="info-card">
            <div className="info-icon yellow-bg"><span role="img" aria-label="phone">📞</span></div>
            <div>
              <div className="info-title">Phone</div>
              <div className="info-content">+91 90197 95625</div>
              <div className="info-note">Mon-Sun 6AM to 11PM</div>
            </div>
          </div>
          <div className="info-card">
            <div className="info-icon yellow-bg"><span role="img" aria-label="email">✉️</span></div>
            <div>
              <div className="info-title">Email</div>
              <div className="info-content">support@auto-sarathi.com</div>
              <div className="info-note">We'll respond within 24 hours</div>
            </div>
          </div>
          <div className="info-card">
            <div className="info-icon yellow-bg"><span role="img" aria-label="office">📍</span></div>
            <div>
              <div className="info-title">Office</div>
              <div className="info-content">Sanjay Ghodawat University, Kolhapur</div>
              <div className="info-note">Visit us Mon-Fri 9AM-6PM</div>
            </div>
          </div>
          <div className="info-card">
            <div className="info-icon yellow-bg"><span role="img" aria-label="support">🕒</span></div>
            <div>
              <div className="info-title">Support Hours</div>
              <div className="info-content">24/7 Customer Support</div>
              <div className="info-note">We're always here to help</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
