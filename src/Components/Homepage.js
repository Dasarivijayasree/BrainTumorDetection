import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css";


const Homepage = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState("");

  const handleRegisterClick = () => {
    navigate('/register', { state: { page: 'register' } });
    setPage("register");
  };

  const handleLoginClick = () => {
    navigate('/login', { state: { page: 'login' } });
    setPage("login");
  };
  return (
    <div className='homepage'>
      <div>Brain Tumor Detection</div>
      <div>
      <button className='b1' onClick={handleRegisterClick}>Register</button>
      <button className='b2' onClick={handleLoginClick}>Login</button>
      </div>
      
    </div>
  );
}

export default Homepage;
