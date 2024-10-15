import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; // Ensure your CSS is linked

const Dashboard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/braintumortest");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h1 className="dashboard-title">Test Brain Tumor Detection Here</h1>
        <p className="dashboard-description">
          With our advanced AI-based Brain Tumor Detection system, you can test
          for early signs of brain tumors. Click the button below to begin the
          test.
        </p>
        <button className="dashboard-button" onClick={handleClick}>
          Brain Tumor Test
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
