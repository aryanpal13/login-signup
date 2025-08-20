import React from 'react';
import { BackArrowIcon } from './Icons';
import '../styles/MobileFrame.css';

export const MobileFrame = ({ children, title, showBackButton, onBack, rightIcon }) => {
  return (
    <div className="mobile-container">
      <div className="mobile-header">
        {showBackButton ? (
          <button onClick={onBack}>
            <BackArrowIcon/>
          </button>
        ) : (
          <div style={{ width: '2rem' }}></div>
        )}
        <h1>{title}</h1>
        {rightIcon ? rightIcon : <div style={{ width: '2rem' }}></div>}
      </div>
      <div className="mobile-content">
        {children}
      </div>
    </div>
  );
};