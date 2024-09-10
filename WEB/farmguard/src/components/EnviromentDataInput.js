import React, { useState } from 'react';

function EnvironmentDataInput() {
  const [temperature, setTemperature] = useState('');
  const [humidity, setHumidity] = useState('');
  const [rainfall, setRainfall] = useState('');

  const   
 handleSubmit = (e) => {
    e.preventDefault();
    // Handle environment data submission here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Temperature:</label>
      <input type="number" value={temperature} onChange={(e) => setTemperature(e.target.value)} />
      <label>Humidity:</label>
      <input type="number" value={humidity} onChange={(e) => setHumidity(e.target.value)} />
      <label>Rainfall:</label>
      <input type="number" value={rainfall} onChange={(e) => setRainfall(e.target.value)} />
      <button type="submit">Submit Data</button>
    </form>
  );
}

export default EnvironmentDataInput;