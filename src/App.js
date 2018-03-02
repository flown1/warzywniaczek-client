import React, { Component } from 'react';
import logo from './logo.svg';
import './Styles/App.css';

import ListOfProducts from './Components/ListOfProducts'
import Navbar from './Components/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <ListOfProducts/>
      </div>
    );
  }
}

export default App;
