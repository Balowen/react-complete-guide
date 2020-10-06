import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  useEffect(() => {
    // executes every render cycle of cockpit
    console.log('[Cockpit.js] useEffect');
    // HTTP request...
    setTimeout(() => {
      alert('Saved data to cloud!');
    }, 1000);
    // only applies if [props.persons] changes
    // if you pass [] it will run only on the first render (as if ComponentDidMount)
  }, []);

  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.Red); // assignedClasses = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.Bold); // assignedClassesassignedClasses = ['red', 'bold']
  }
  // MAKE SURE you assign a string by adding .join(' ')
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is realy working</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
