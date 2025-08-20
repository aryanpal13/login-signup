import React from 'react';
import { MobileFrame } from '../components/MobileFrame';
import '../styles/SignInPage.css';

const SignInPage = ({ onNavigate }) => {
  return (
    <MobileFrame title="Signin to your PopX account" showBackButton={true} onBack={() => onNavigate('welcome')}>
      <div className="signin-page-content">
        <div className="text-left w-full mb-8">
          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>
        <form className="signin-form">
          <div className="input-group">
            <input type="email" id="signinEmail" placeholder=" " required />
            <label htmlFor="signinEmail">Email Address*</label>
          </div>
          <div className="input-group">
            <input type="password" id="signinPassword" placeholder=" " required />
            <label htmlFor="signinPassword">Password*</label>
          </div>
        </form>
        <div className="w-full mt-auto">
          <button
            className="login-btn"
            disabled
          >
            Login
          </button>
        </div>
      </div>
    </MobileFrame>
  );
};

export default SignInPage;