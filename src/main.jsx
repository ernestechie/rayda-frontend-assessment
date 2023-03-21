import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(0, 76, 204, 1)',
    },
    secondary: {
      main: 'rgba(240, 68, 56, 1)',
    },
    dark: {
      main: 'rgba(52, 64, 84, 1)',
    },
    pale: {
      main: 'rgba(255, 250, 235, 1)',
      dark: 'rgba(247, 144, 9, 1)',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
