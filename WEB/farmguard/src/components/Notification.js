import React from 'react';
import Alert from '@mui/material/Alert'; // MUI Alert component

const Notification = ({ message, severity }) => {
  return <Alert severity={severity}>{message}</Alert>;
};

export default Notification;
