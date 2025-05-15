import React from 'react';
import './header.scss';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ setIslogin }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('auth');     // Remove auth flag
    setIslogin(false);                   // Update login state
    navigate('/login');                  // Redirect to login
  };

  return (
    <>
      <div className="header-parent parent">
        <div className="header-cont container">
          <div className="header-logo">
            <Link to="/">AI-Tool</Link>
          </div>
          <div className="header-menu">
            <div className="btn" onClick={handleLogout}>
              LogOut
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
