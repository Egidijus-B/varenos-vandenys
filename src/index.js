import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Your main CSS file
import App from './App'; // Main App component
import i18n from './i18n'; // Initialize i18next
import reportWebVitals from './reportWebVitals'; // For measuring performance
import { I18nextProvider } from 'react-i18next'; // Provider for i18next
import 'leaflet/dist/leaflet.css'; // Leaflet CSS for maps
import { createRoot } from 'react-dom/client'; // Updated import for React 18

// Get the root element from the HTML
const root = document.getElementById('root');

// Create a render function to render the App with i18n provider
const render = (Component) => {
  createRoot(root).render(
    <React.StrictMode>
      <I18nextProvider i18n={i18n}>
        <Component />
      </I18nextProvider>
    </React.StrictMode>
  );
};

// Render the App component
render(App);

// Optional: Measure performance (if needed)
reportWebVitals();
