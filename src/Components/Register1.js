import React from 'react'
import "../App.css"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register1 = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState();
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const response = await fetch('http://localhost:8080/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData), 
    });
    const result = await  response.json();
    setStatus(result.status);
    setMessage(result.message);
    if(status == 100){
      navigate('/login');
    }
  }
  return (
    <div>
      <h1 className='text-mid'>Register</h1>
      <form onSubmit={handleSubmit}> 
        <div className="mb-10">
          <label className="first" htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firsName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-10">
          <label className="last" htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-10">
          <label className="email" htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-10">
          <label className="username" htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-10">
          <label className="pass" htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className='regBtn mt-20'>
          <button className="subBtn" type="submit">Register</button>
        </div>
      </form>
    </div>
  )
}

export default Register1
