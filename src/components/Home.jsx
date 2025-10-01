import React, { useState } from "react";
import "./Home.css";

function Home() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [dropSuggestions, setDropSuggestions] = useState([]);

  // Fetch location suggestions from OpenStreetMap
  const fetchSuggestions = async (query, setSuggestions) => {
    if (!query) {
      setSuggestions([]);
      return;
    }
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${query}`
    );
    const data = await res.json();
    setSuggestions(data);
  };

  const handlePickupChange = (e) => {
    const value = e.target.value;
    setPickup(value);
    fetchSuggestions(value, setPickupSuggestions);
  };

  const handleDropChange = (e) => {
    const value = e.target.value;
    setDrop(value);
    fetchSuggestions(value, setDropSuggestions);
  };

  const handleFindRickshaw = () => {
    console.log("Pickup:", pickup);
    console.log("Drop:", drop);
  };

  return (
    <div className="homepage-bg">
      <div className="homepage-overlay">
        <h1>
          Book Your Rickshaw
          <br />
          in Seconds
        </h1>
        <p className="subheading">
          Fast, reliable, and affordable auto-rickshaw rides at your fingertips.
          Get wherever you need to go with just a tap.
        </p>
        <div className="search-card">
          {/* Pickup Input */}
          <input
            type="text"
            placeholder="Pickup location"
            className="location-input"
            value={pickup}
            onChange={handlePickupChange}
          />
          {pickupSuggestions.length > 0 && (
            <div className="autocomplete-dropdown">
              {pickupSuggestions.map((sug, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setPickup(sug.display_name);
                    setPickupSuggestions([]);
                  }}
                >
                  {sug.display_name}
                </div>
              ))}
            </div>
          )}

          {/* Drop Input */}
          <input
            type="text"
            placeholder="Drop location"
            className="location-input"
            value={drop}
            onChange={handleDropChange}
          />
          {dropSuggestions.length > 0 && (
            <div className="autocomplete-dropdown">
              {dropSuggestions.map((sug, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setDrop(sug.display_name);
                    setDropSuggestions([]);
                  }}
                >
                  {sug.display_name}
                </div>
              ))}
            </div>
          )}

          <button className="find-btn" onClick={handleFindRickshaw}>
            Find Rickshaw
          </button>
        </div>

        {/* Features section remains untouched */}
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
