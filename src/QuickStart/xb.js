// Counter.js
import React from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from '../actions/todo.js';


function Counter({ value, addToCart, updateCart , deleteFromCart}) {

    return (
        <div>
            {value.map((v,index) => 
                <li  key={index.toString()}> { v.product }-{v.quantity}-{v.unitCost} </li>
            )}
            <button onClick={addToCart} >Add</button>
            <button onClick={deleteFromCart} >Delete</button>
        </div>
    );
}

export default connect(
    state => ({ value: state.Todos.cart }),
    ActionCreators
)(Counter);