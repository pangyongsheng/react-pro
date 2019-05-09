import React, { Component } from 'react';

//事件绑定 的两种写法

export default class Event extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this);
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    handleClick2=()=>{
        console.log(this);
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    handleClick3(){
        console.log(this);
    }

    render() {
        return ( <div>
            <h1>{ this.state.isToggleOn ? 'ON' : 'OFF' }</h1>
        	<button onClick = { this.handleClick } >点我1</button>
            <button onClick = { (e) => this.handleClick(e) } >点我2</button>
            <button onClick = { this.handleClick2 } >点我3</button>
            <button onClick = { (e) => {console.log(this)} } >点我 ！！！！！ </button>
            <button onClick = { this.handleClick3 } >点我錯誤 </button>
            </div>
        );
    }

}