import React, { useState } from 'react';
import WelcomePage from './pages/WelcomePage';
import CreateAccountPage from './pages/CreateAccountPage';
import SignInPage from './pages/SignInPage';
import AccountSettingsPage from './pages/AccountSettingsPage';
import './styles/globals.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('welcome');

  const navigate = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'welcome':
        return <WelcomePage onNavigate={navigate} />;
      case 'create-account':
        return <CreateAccountPage onNavigate={navigate} />;
      case 'signin':
        return <SignInPage onNavigate={navigate} />;
      case 'account-settings':
        return <AccountSettingsPage onNavigate={navigate} />;
      default:
        return <WelcomePage onNavigate={navigate} />;
    }
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
};

export default App;