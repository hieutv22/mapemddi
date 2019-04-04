import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Map from './components/Map';
import Button from './components/Button';

class App extends Component {
  render() {
    return (
      <div>
        <div><Map/></div>
        <div><Header/></div>
        <div><Footer/></div>
      </div>
    );
  }
}

export default App;
