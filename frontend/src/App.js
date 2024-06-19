import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import User from './pages/User/User';
import { useSelector } from 'react-redux'; // Import de useSelector pour accéder à l'état Redux

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/user" element={isLoggedIn ? <User /> : <Navigate to="/sign-in" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
