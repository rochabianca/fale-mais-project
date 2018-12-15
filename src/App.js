import React, { Component } from 'react';
import './App.css';
import CalculateTaxes from './components/CalculateTaxes/CalculateTaxes';
import Input from './components/Input/Input';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Input />
      </div>
    );
  }
}

export default App;
