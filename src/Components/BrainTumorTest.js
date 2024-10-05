import React, {useState} from 'react'

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
    formData.append('file', file);

    try {
      const res = await fetch('', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setPrediction(res.data);
      setShowModal(true); // Show the modal after prediction
    } catch (error) {
      console.error(error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h1 className='text-mid'>Brain Tumor Detection Test</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-10">
          <label className="upload-label">Upload Brain Scan Image:</label>
          <input
            type="file"
            id="imageUpload"
            name="imageUpload"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit" className="subBtn">Upload and Test</button>
      </form>

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Prediction Result</h2>
            {prediction ? (
              <>
                <p>Prediction: {prediction.prediction}</p>
                {prediction.prediction === 'Tumor' && (
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
  )
}

export default BrainTumorTest
