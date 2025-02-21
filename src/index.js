import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Importing global styles
import App from './App'; // Importing the App component
import reportWebVitals from './reportWebVitals'; // Optional for performance tracking

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Rendering the App component */}
  </React.StrictMode>,
  document.getElementById('root') // This links to the div with id="root" in your HTML
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();
