import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './custom.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ScrollToTop from './Components/ScrollTop';
import { Provider } from 'react-redux';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/apple.com">
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
