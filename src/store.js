import { applyMiddleware,createStore } from "redux";
import thunk from 'redux-thunk';
import rootReducer from './reducers';

import {decrement,increment}  from './actions/count.js';

let store = createStore(rootReducer,applyMiddleware(thunk));


// console.log(store.getState('count'))
// store.dispatch(increment())
// console.log(store.getState('count'))

export default store;