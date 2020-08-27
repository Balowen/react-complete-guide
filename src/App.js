import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react App</h1>
        <p>This is realy working</p>
        <Person name="Max" age="18">
          My hobby is playing piano
        </Person>
        <Person name="Manu" age="12" />
        <Person name="Mimo" age="21" />
      </div>
    );
  }
}

<Person />;
export default App;
