import React, { Component } from 'react';
import './App.css';
import CalculateTaxes from './components/CalculateTaxes/CalculateTaxes';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <CalculateTaxes
          origin={11}
          destination={16}
          minutesGranted={30}
          minutes={60}
        />
      </div>
    );
  }
}

export default App;
