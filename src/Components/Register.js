import React, { useEffect, useState } from 'react';
import img from "../Images/brain-tumor.jpg";
import Register1 from './Register1';
import { useLocation } from 'react-router-dom';
import Login from '../Components/Login.js'

const Register = () => {
  const location = useLocation();
  const page = location.state?.page;
  return (
    <div className="register">
      <div className="regc1">
        <img src={img} alt="Brain Tumor"/>
      </div>
      <div className="regc2 mt-80">
        {page==="register"?<Register1 />:<Login />}
      </div>
    </div>
  );
}

export default Register;
