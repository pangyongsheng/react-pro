import React , { Component }  from 'react';
import store  from '../store';
import {add,reduce,getList} from '../actions/list.js';

import {increment} from '../actions/count.js';

//redux异步

export default class Rx extends Component {
    constructor(props) {
        super(props);
        this.state={
        	a:"1"
        }
    }

    add(){
    	let a= Math.random()
    	store.dispatch(add(a));
    }

    reduces(){
    	store.dispatch(reduce())
    }
    get(){
    	store.dispatch(getList())
    }

    componentDidMount(){
    	store.subscribe(this.ccc);
    }
    ccc =() => {
    	this.setState({
    		a:"a"
    	});
    }

    render() {
    	var lists = store.getState('count').list;
    	console.log(lists);
        return ( <div>
        		<button onClick={(e) =>{this.add()}}>加</button>

        		<button onClick={(e) =>{this.reduces()}}>减</button>

        		<button onClick={(e) =>{this.get()}}>获取</button>
	        	<ul>
	        		{
		        		store.getState('count').list.li.map((number,index) =>{
		        			return <li  key={index}> { number } < /li>		
		        		})
	        		}
	        	</ul>
            </div>
        );
    }

}