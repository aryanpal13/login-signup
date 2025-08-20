import React from 'react';
import { MobileFrame } from '../components/MobileFrame';
import { SettingsIcon, PersonIcon } from '../components/Icons';
import '../styles/AccountSettingsPage.css';

const AccountSettingsPage = ({ onNavigate }) => {
  return (
    <MobileFrame
      title="Account Settings"
      showBackButton={true}
      onBack={() => onNavigate('welcome')}
    >
      <div className="account-info">
        <div className="profile-image-container">
          <img
            src="https://placehold.co/60x60/8b5cf6/ffffff?text=U"
            alt="User Profile"
            className="profile-image"
          />
          <div className="person-icon-overlay">
            <PersonIcon />
          </div>
        </div>
        <div className="profile-text">
          <h3>Marry Doe</h3>
          <p>Marry@gmail.com</p>
        </div>
      </div>
      <div className="profile-description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elitr,
          Sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, Sed diam
        </p>
        <hr className="dotted-break" />
      </div>
    </MobileFrame>
  );
};

export default AccountSettingsPage;