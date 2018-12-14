import React, { Component } from 'react';

//组件 & Props
class A extends Component {
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
