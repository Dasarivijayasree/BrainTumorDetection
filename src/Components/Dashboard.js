import React from 'react'
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
  const navigate = useNavigate();
  const handleClick = () =>{
    navigate("/braintumortest");
  }
  return (
    <div>
      Test Brain Tumor Detection here.
      <button onClick={handleClick}>Brain Tumor Test</button>
    </div>
  )
}

export default Dashboard
