import React, { useEffect, useState } from 'react';
import img from "../Images/brain-tumor.jpg";
import { useLocation } from 'react-router-dom';
import Login1 from './Login1.js';

const Login = () => {
  const location = useLocation();
  const page = location.state?.page;
  return (
    <div className="register">
      <div className="regc1">
        <img src={img} alt="Brain Tumor"/>
      </div>
      <div className="regc2 mt-80">
        <Login1/>
      </div>
    </div>
  );
}

export default Login;
