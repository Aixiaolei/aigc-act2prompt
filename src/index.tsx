import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from "./pages/index"
import './assets/index.scss'
import './assets/reset.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'mobx-react';
import store from  './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
