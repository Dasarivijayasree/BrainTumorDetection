import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css";

//home page
const Homepage = () => {
  const navigate = useNavigate();
  
  const handleRegisterClick = () => {
    navigate('/register');
  };

  const handleLoginClick = () => {
    navigate('/login');
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
