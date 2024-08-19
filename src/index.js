
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import i18n from './i18n'; // Initialize i18next
import reportWebVitals from './reportWebVitals';
import { I18nextProvider } from 'react-i18next';
import { createRoot } from 'react-dom';
import 'leaflet/dist/leaflet.css';


const root = document.getElementById('root');

const render = (Component) => {
  createRoot(root).render(
    <React.StrictMode>
      <I18nextProvider i18n={i18n}>
        <Component />
      </I18nextProvider>
    </React.StrictMode>
  );
};

render(App);