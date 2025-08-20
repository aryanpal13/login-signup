import React from 'react';
import { MobileFrame } from '../components/MobileFrame';
import '../styles/CreateAccountPage.css';

const CreateAccountPage = ({ onNavigate }) => {
  return (
    <MobileFrame title={<>
      Create your<br />
      PopX account
    </>} showBackButton={true} onBack={() => onNavigate('welcome')}>
      <form className="create-account-form">
        <div className="input-group">
          <input className="inputfield" defaultValue="Marry Doe" type="text" id="fullName" placeholder="" required />
          <label htmlFor="fullName">Full Name<span className="text-red-500">*</span></label>
        </div>
        
        <div className="input-group">
          <input className="inputfield"  type="tel" id="phoneNumber" placeholder=" " required />
          <label htmlFor="phoneNumber">Phone Number<span className="text-red-500">*</span></label>
        </div>

        <div className="input-group">
          <input type="email" id="emailAddress" placeholder=" " required />
          <label htmlFor="emailAddress">Email Address<span className="text-red-500">*</span></label>
        </div>

        <div className="input-group">
          <input type="password" id="password" placeholder=" " required />
          <label htmlFor="password">Password<span className="text-red-500">*</span></label>
        </div>

        <div className="input-group">
          <input type="text" id="companyName" placeholder=" " />
          <label htmlFor="companyName">Company Name</label>
        </div>
        
        <div className="pt-4">
          <p className="text-gray-700 mb-2">Are you an Agency?</p>
          <div className="flex items-center space-x-4">
            <label className="inline-flex items-center">
              <input type="radio" name="agency" value="yes" className="form-radio text-purple-700" />
              <span className="ml-2 text-gray-700">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name="agency" value="no" className="form-radio text-purple-700" />
              <span className="ml-2 text-gray-700">No</span>
            </label>
          </div>
        </div>
        
        <div className="mt-8">
          <button
            type="submit"
            className="btn font-semibold py-3 rounded-lg transition-colors hover:bg-purple-800"
            onClick={(e) => { e.preventDefault(); onNavigate('account-settings'); }}
          >
            Create Account
          </button>
        </div>
      </form>
    </MobileFrame>
  );
};

export default CreateAccountPage;