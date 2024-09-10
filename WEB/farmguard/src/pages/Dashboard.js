import React from 'react';
import HealthTrendsChart from '../charts/HealthTrendsChart';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>Monitor the health of your crops and disease detection trends over time.</p>
      <HealthTrendsChart />
      {/* Add more charts and analytics here */}
    </div>
  );
};

export default Dashboard;
