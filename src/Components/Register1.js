import React from 'react'
import "../App.css"
import { useState } from 'react';

const Register1 = () => {

  return (
    <div>
      <h1>Register</h1>
      <form>
        <div className="mb-10">
          <label className="user" htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            //value={formData.username}
            // onChange={handleChange}
            required
          />
        </div>
        <div className="mb-10">
          <label className="email" htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            //value={formData.email}
            // onChange={handleChange}
            required
          />
        </div>
        <div className="mb-10">
          <label className="pass" htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            //value={formData.password}
            // onChange={handleChange}
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
