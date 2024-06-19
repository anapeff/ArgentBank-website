import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logoImage from '../../images/argentBankLogo.png';

const Header = () => {
  const { isAuthenticated, user } = useSelector(state => state.auth);

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logoImage}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isAuthenticated ? (
          <>
            <span className="main-nav-item">Welcome, {user?.userName}</span>
            <Link className="main-nav-item" to="/logout">
              <i className="fa fa-sign-out"></i>
              Logout
            </Link>
          </>
        ) : (
          <Link className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
