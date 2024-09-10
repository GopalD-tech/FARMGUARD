import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { date: '2024-09-01', health: 75 },
  { date: '2024-09-02', health: 80 },
  { date: '2024-09-03', health: 85 },
  { date: '2024-09-04', health: 65 },
  { date: '2024-09-05', health: 70 },
];

const HealthTrendsChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis domain={[0, 100]} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="health" stroke="#4caf50" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default HealthTrendsChart;
