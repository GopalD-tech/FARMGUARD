import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';  // Main CSS file for styles
import App from './App';     // Import the main App component
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Optional: MUI theme for customization
import CssBaseline from '@mui/material/CssBaseline'; // Reset default browser styles

// Optional: Custom Material-UI theme (can be customized as needed)
const theme = createTheme({
  palette: {
    primary: {
      main: '#4caf50', // FarmGuard's main green color
    },
    secondary: {
      main: '#ff5722', // Optional: secondary color
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    {/* ThemeProvider to apply Material-UI theme globally */}
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Resets browser default styles */}
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root') // Reference to the root div in public/index.html
);
