import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
    <Provider store={store}>
    <App />
    </Provider>
    </Router>
  </StrictMode>,
)
