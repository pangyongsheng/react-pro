import { combineReducers } from 'redux';
import todosReducer from './todos';
import countReducer from './count'

const allReducers = {
  Todos: todosReducer,
  count: countReducer
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;