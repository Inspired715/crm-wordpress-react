import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './assets/fonts/Fontspring-DEMO-integralcf-bold.otf';
import './assets/fonts/helvetica_medium.ttf';
import './assets/fonts/FontsFree-Net-Integral-CF-Regular.ttf';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
