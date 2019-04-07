import { combineReducers } from 'redux';
import todosReducer from './todos';
import countReducer from './count';
import listReducer from './list'

const allReducers = {
  Todos: todosReducer,
  count: countReducer,
  list : listReducer
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;