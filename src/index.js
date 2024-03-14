import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import messages_es from './locales/es.json'; 
import messages_en from './locales/en.json'; 
import messages_it from './locales/it.json';

const language = navigator.language.split(/[-_]/)[0]; // Obtiene el idioma del navegador
const messages = {
  es: messages_es,
  en: messages_en,
  it: messages_it,
};

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={language} messages={messages[language]}>
      <App />
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
