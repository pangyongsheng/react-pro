import React , { Component } from 'react';
import Calculator from './l';

export default class Aa extends Component {
	constructor(props){
		super(props);
		this.handleChange=this.handleChange.bind(this);
		this.state={temperrature:''};
	}
	handleChange(e){
		this.setState({temperrature:e.target.value})
	}
	render(){
		
	}

}