import React, { Component } from 'react';
import { Button } from 'element-react';
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
    constructor(props) {
        super(props);
        this.state={
            a:true
        }
    }
    change(){
        console.log(this.state.a);
        this.setState({
            a:!this.state.a
        })
    }
    render(){
        return(
            <div>
                <Button onClick = { (e) => this.change(e) } >點我</Button>
                <Aa isLoggedIn={true}/>
                <Aa isLoggedIn={false}/>
                {this.state.a && <div>是</div> }
                {!this.state.a && <div>否</div> }
            </div>
        )
    }
} 