import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 },
    ],
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log('Was clicked');
    // DONT'T DO THISthis.state.persons[0].name = 'Bartłomiej';
    setPersonsState({
      persons: [
        { name: 'Bartłomiej', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 42 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a react App</h1>
      <p>This is realy working</p>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      ></Person>
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        I like playing piano
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      ></Person>
    </div>
  );
};

export default app;
