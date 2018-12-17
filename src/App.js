import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Input from './components/Input/Input';
import EntriesLog from './components/EntriesLog/EntriesLog';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={Input} />
            <Route exact path='/log' component={EntriesLog} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
