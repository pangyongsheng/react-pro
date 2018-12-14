import React, { Component } from 'react';

//事件绑定 的两种写法

export default class Event extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return ( <div>
        	<button onClick = { this.handleClick } > { this.state.isToggleOn ? 'ON' : 'OFF' } </button>
            <button onClick = { (e) => this.handleClick(e) } > { this.state.isToggleOn ? 'ON' : 'OFF' } </button>
            </div>
        );
    }

}