import React, { Component } from 'react';
//条件渲染
class Aa extends Component {
    constructor(props) {
        super(props);
    }
    greeting(props) {
        const isLoggedIn = this.props.isLoggedIn;
        if (isLoggedIn) {
            return <h1>1111</h1>;
        }
        return <h1>2222</h1>;
    }
    render() {
        return this.greeting();
    }
}



export default class Dd extends Component {
    render(){
        return(
            <div>
                <Aa isLoggedIn={true}/>
                <Aa isLoggedIn={false}/>
            </div>
        )
    }
} 