// Import the React module
import React from 'react';
// Import the ReactDOM module, this allows rendering HTML in the DOM.
import ReactDOM from 'react-dom';
// Import the CSS for the Index
import './index.css';
// Import the "App" class from App.js
import App from './App';
// Import the registerServiceWorker.js file
import registerServiceWorker from './registerServiceWorker';

// Render the HTML returned to class App from the extended Component in the DOM
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
