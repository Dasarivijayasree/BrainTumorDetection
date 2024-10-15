import React, { useState } from "react";
import "../App.css"; // Ensure your CSS is linked

const BrainTumorTest = () => {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:8080/predict/tumor", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      setPrediction(result);
      setShowModal(true);
    } catch (error) {
      console.error(error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="brain-tumor-test-container">
      <h1 className="brain-tumor-title">Brain Tumor Detection Test</h1>
      <form onSubmit={handleSubmit} className="upload-form">
        <div className="form-group">
          <label className="upload-label">Upload Brain Scan Image:</label>
          <input
            type="file"
            id="imageUpload"
            name="imageUpload"
            onChange={handleFileChange}
            required
            className="file-input"
          />
        </div>
        <button type="submit" className="submit-btn">
          Upload and Test
        </button>
      </form>

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Prediction Result</h2>
            {prediction ? (
              <>
                <p>Prediction: {prediction.prediction}</p>
                {prediction.prediction === "Tumor" && (
                  <p>Risk Level: {prediction.risk}</p>
                )}
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BrainTumorTest;
