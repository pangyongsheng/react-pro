import React, { Component } from 'react';

//组件 & Props
class A extends Component {
	constructor(props){
		super(props);
		//console.log(this.test([1,23,1,1,1,3,23,5,6,7,9,9,8,5]));
		//console.log(this.test2([1,23,1,1,1,3,23,5,6,7,9,9,8,5]));
		this.test();
		// document.addEventListener('message', function(msg) {
		// 	alert(msg.data);
		// })
	}

	test(arr){
		var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
		//console.log(Object.prototype.toString.call(m).match(/\[object (.*?)\]/)); // 95
		var str ="catbatsatfat"
		console.log(str.match(/.at/g));
	}

	test2(arr){
		
	}

    render() {
        return <h1>Hello, {this.props.names}</h1>;
    }
}                                   

//使用组件
const elemet =  (<A names="name"/>);

export default class Aa extends Component{
     render() {
        return <A names="name"/>
    }
}