import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from "./components/navigationbar.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
      </div>
    );
  }
}

export default App;
