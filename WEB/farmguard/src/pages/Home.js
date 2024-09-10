import React from 'react';
import farmImage from '../images/farm-background.jpg'; // Correct relative path from src/pages

import CropImageUpload from '../components/CropImageUpload'

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${farmImage})` }}>
      <div className="overlay">
        <h2>Welcome to FarmGuard</h2>
        <p>Detect crop diseases early with AI-driven insights.</p>
      </div>
      <CropImageUpload/>
    </div>
  );
};

export default Home;

