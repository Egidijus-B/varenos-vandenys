// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { I18nextProvider } from 'react-i18next';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en.json';
import translationLT from './locales/lt.json';

const resources = {
  en: {
    translation: translationEN,
  },
  lt: {
    translation: translationLT,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',   // default language
    fallbackLng: 'en',   // fallback language
    interpolation: {
      escapeValue: false, // not needed for React
    },
  });

export default i18n;