import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from "./pages/index"
import './assets/index.scss'
import './assets/reset.scss'
import { BrowserRouter as Router } from 'react-router-dom'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </Router>
);



