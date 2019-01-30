// Counter.js
import React from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from '../actions/count.js';


function Counter({value, increment, decrement}) {
	
  return (
    <div>
      <p>Click:  times{value.count}</p>
      <button onClick={increment} >+Add</button>
      <button onClick={decrement} >-increment</button>
    </div>
  );
}

export default connect(
  state => ({ value: state}),
  ActionCreators
)(Counter);