export const ADD  = "PUSH";
export const REDUCE ="POP";
export const GET ="GET";

export function add(value) {
  return {
    type: ADD,
    payload:  value 
  }
}

export function reduce() {
  return {
    type: REDUCE
  }
}

export function getList() {
  return (dispatch) => {
  	fetch('http://39.106.166.212:3000/api/tags')
		.then(response => response.json())
		.then(json => {
			let a = json.tags.map((v)=>{
				return v.name
			})
			dispatch({
				type:GET,
				payload:a
			})
		})
		.catch((error) => {
        	console.log(error)
      	})
  }
}