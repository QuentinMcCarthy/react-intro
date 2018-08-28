// Import the React "Component" inside an object
import React, { Component } from 'react';
// Import the logo.svg file from the current folder
import logo from './logo.svg';
// Import the CSS file from the current folder
import './App.css';

// Use the Component taken from React
// Use the App class to extend the component for rendering of the given HTML
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
