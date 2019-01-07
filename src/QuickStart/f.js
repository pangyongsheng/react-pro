import React, { Component } from 'react';



//列表渲染
class Aa extends Component {
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

export default class Li extends Component {
    render() {
        return <Aa numbers={[1,2,3,4,5,6]}/>
    }
}