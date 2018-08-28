import React, { Component } from 'react';

//组件 & Props

export default class Aa extends Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}