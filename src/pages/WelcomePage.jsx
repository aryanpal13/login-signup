import React from "react";
import "../styles/WelcomePage.css";

const WelcomePage = ({ onNavigate }) => {
  return (
    <div className="welcome-page-container">
      <div className="welcome-page-content">
        <div>
          <h2>Welcome to PopX</h2>
          <p>
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit,
          </p>
        </div>
        <div className="welcome-page-buttons">
          <button
            className="create-account-btn"
            onClick={() => onNavigate("create-account")}
          >
            Create Account
          </button>
          <button className="login-btn" onClick={() => onNavigate("signin")}>
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
