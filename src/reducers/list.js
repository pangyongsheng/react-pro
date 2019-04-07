import { ADD, REDUCE, GET} from '../actions/list';

const li = {li:["html"]};


export default function(state = li, action){
	switch(action.type){

		case ADD:{
			console.log(action);
			return{
				li:[...state.li,action.payload]
			}
		}
		case REDUCE :{
			console.log(action);
			return{
				li:state.li.slice(0,state.li.length-1)
			}
		}

		case GET :{
			console.log(action);
			return{
				li:[...state.li,...action.payload]
			}
		}

		default :
			return state;
	}

}