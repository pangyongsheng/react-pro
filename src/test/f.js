import React, { Component } from 'react';



//列表渲染
export default class Aa extends Component {
	constructor(props) {
        super(props);
    }
	NumberList(props) {
        const numbers = this.props.numbers;
        const listItems = numbers.map((number) =>
            <li  key={number.toString()}> { number } < /li>
        );
        return ( <ul > { listItems } < /ul>);
    }
    render() {
        return this.NumberList();
    }
}