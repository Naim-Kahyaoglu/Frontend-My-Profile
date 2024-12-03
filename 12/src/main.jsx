import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';  // Yeni CSS dosyasını buraya import edeceğiz
import App from './App'; // App bileşenini güncelleyeceğiz

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
