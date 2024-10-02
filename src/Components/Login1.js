import React, { useState } from 'react';

const Login1 = () => {
  const [status, setStatus] = useState();
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
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
    const response = await fetch('http://localhost:8080/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData), 
    });
    console.log(response);
    setStatus(response.status)
    setMessage(response.message)
    console.log("status of the api", status);
    console.log(message);
  }
  return (
    <div>
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
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
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
    
export default Login1;
