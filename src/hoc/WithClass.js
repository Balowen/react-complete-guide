import React from 'react';

const withClass = (props) => (
  // it sets up a class on a div that wraps a component
  <div className={props.classes}>{props.children}</div>
);

export default withClass;
