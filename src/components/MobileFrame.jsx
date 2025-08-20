import React from 'react';
import { BackArrowIcon } from './Icons';
import '../styles/MobileFrame.css';

export const MobileFrame = ({ children, title, showBackButton, onBack, rightIcon }) => {
  return (
    <div className="mobile-container">
      <div className="mobile-header">
        {showBackButton ? (
          <button onClick={onBack} className="p-2 text-gray-700 rounded-full hover:bg-gray-100 transition-colors">
            <BackArrowIcon className="w-6 h-6 text-gray-700" />
          </button>
        ) : (
          <div style={{ width: '2rem' }}></div>
        )}
        <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
        {rightIcon ? rightIcon : <div style={{ width: '2rem' }}></div>}
      </div>
      <div className="mobile-content">
        {children}
      </div>
    </div>
  );
};