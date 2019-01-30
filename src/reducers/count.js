import { INCREMENT, DECREMENT} from '../actions/count.js';

export default function countReducer(state = 0, action) {
    switch(action.type) {
    case 'INCREMENT':
        return state + 1;
    case 'DECREMENT':
        return state - 1;
    default :
        return state;
    }
}