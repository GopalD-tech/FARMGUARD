import React, { useState } from 'react';
import { uploadCropImage } from '../api/diseaseDetection';
import CircularProgress from '@mui/material/CircularProgress'; // MUI for loader

const CropUpload = () => {
  const [image, setImage] = useState(null);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0])); // Image preview
  };

  const handleSubmit = async (file) => {
    setLoading(true);
    const response = await uploadCropImage(file);
    setResults(response.data);
    setLoading(false);
  };

  return (
    <div className="crop-upload">
      <input type="file" onChange={(e) => handleImageChange(e.target.files[0])} />
      {image && <img src={image} alt="Crop Preview" className="image-preview" />}
      <button onClick={handleSubmit}>Upload & Detect</button>

      {loading ? <CircularProgress /> : null}

      {results && (
        <div className="results">
          <h3>Results:</h3>
          <p>{results}</p>
        </div>
      )}
    </div>
  );
};

export default CropUpload;
