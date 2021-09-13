import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { StudentProvider } from './contexts/studentContext';
import App from './App';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <StudentProvider>
      <App />
    </StudentProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
