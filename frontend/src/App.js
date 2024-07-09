import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import User from './pages/User/User';
import { useSelector } from 'react-redux'; 

function App() {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/user" element={isLoggedIn ? <User /> : <Navigate to="/sign-in" />} />
          <Route path="*" element={<Navigate to="/" />} />  {/* Route par défaut */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
