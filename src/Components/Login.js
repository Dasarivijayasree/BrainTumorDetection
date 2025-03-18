import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { HelmetProvider } from "react-helmet-async";
const Login = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState();
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const responseData = await fetch("http://localhost:8080/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const response = await responseData.json();
    setStatus(response.status);
    setMessage(response.message);
    if (status == 100) {
      navigate("/dashboard");
    }
  };

  return (
    <>
      <HelmetProvider>
        <title>Login | Colon Cancer Detection</title>
      </HelmetProvider>
      <div className="login-container">
        {/* Left Side: Content Section */}
        <div className="login-content">
          <h1 className="login-title">Welcome to Colon Cancer Detection</h1>
          <p className="login-subtitle">
            Early detection saves lives. Our advanced AI-powered tools help you
            identify potential risks and take control of your health.
          </p>
          <div className="login-features">
            <h2>Why Choose Us?</h2>
            <ul>
              <li>Accurate and reliable detection methods</li>
              <li>User-friendly interface</li>
              <li>24/7 support and guidance</li>
            </ul>
          </div>
          <p className="login-cta">
            Don't have an account? <a href="/register">Register here</a>.
          </p>
        </div>

        {/* Right Side: Login Form */}
        <div className="login-form-container">
          <h1 className="form-title">Login</h1>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          {status == 404 && <div className="error-message">{message}</div>}
        </div>
      </div>
    </>
  );
};

export default Login;
