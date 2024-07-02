import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoImage from '../../images/argentBankLogo.png';
import { userLogout, setLoggedIn } from '../../redux/actions/authActions';
import { useDispatch, useSelector } from 'react-redux'; 
import { fetchUserProfile } from '../../redux/actions/profileActions';

const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userProfile = useSelector((state) => state.profile.userProfile); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(userLogout());
    navigate ('/sign-in');
  };
  useEffect(() => {
    const tokenLocal = localStorage.getItem('token');
    const tokenSession = sessionStorage.getItem('token');
    
    if (tokenLocal || tokenSession) {
      dispatch(setLoggedIn());
      dispatch(fetchUserProfile());
    }
  }, [dispatch]);

  return (
    <nav className='main-nav'>
      <Link to='/' className='main-nav-logo'>
        <img src={logoImage} alt='Argent Bank Logo' className='main-nav-logo-image' />
        <h1 className='sr-only'>Argent Bank</h1>
      </Link>
      <div>
        {isLoggedIn ? (
          <>
            <Link to='/user' className='main-nav-item'>
              <i className='fa fa-user-circle'></i>
              {userProfile.userName} 
            </Link>
          
            <button className='main-nav-item-logout' onClick={handleLogout}>
              <i className='fa fa-sign-out'></i>
              Logout
            </button>
          </>
        ) : (
          <Link to='/sign-in' className='main-nav-item'>
            <i className='fa fa-user-circle'></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
