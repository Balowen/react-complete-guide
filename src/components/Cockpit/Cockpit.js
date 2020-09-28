import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
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
      <h1>Hi, Im a react App</h1>
      <p className={assignedClasses.join(' ')}>This is realy working</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
