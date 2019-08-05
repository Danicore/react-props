import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Person name="Ahmed" age="26">Swimming</Person>
        <Person name="Ali" age="24">Racing</Person>
        <Person name="Bilal" age="22">Cycling</Person>
      </div>
    )
  }
}

export default App;
