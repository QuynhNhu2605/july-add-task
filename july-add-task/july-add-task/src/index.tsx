import React from 'react';
import ReactDOM from 'react-dom/client';
// @ts-ignore
import App from './View/App.tsx';

const root = ReactDOM.createRoot(document.getElementById('root')as HTMLElement) ;
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
