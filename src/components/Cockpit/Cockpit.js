import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  useEffect(() => {
    // executes every render cycle of cockpit
    console.log('[Cockpit.js] useEffect');
    // HTTP request...

    toggleBtnRef.current.click();

    // that return runs BEFORE the main useEffect function runs, but AFTER the (first) render cycle
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };

    // only applies if [props.persons] changes
    // if you pass [] it will run only on the first render (as if ComponentDidMount) and when its unmounted
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.Red); // assignedClasses = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.Bold); // assignedClassesassignedClasses = ['red', 'bold']
  }
  // MAKE SURE you assign a string by adding .join(' ')
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is realy working</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      <button onClick={authContext.login}>Log in</button>
    </div>
  );
};

export default React.memo(cockpit);
