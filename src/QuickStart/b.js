import React, { Component } from 'react';

//State & 生命周期

export default class Clock extends Component {

  constructor(props){
    super(props);
    this.state={date:new Date()} //声明state
  }

  componentDidMount() { //
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
     clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
      return ( 
        <div>
          <h1> 当前时间： </h1> 
          <h2> It is { this.state.date.toLocaleTimeString() }. < /h2> 
        </div>
      );
  }
}

/* 实例化
1、getDefaultProps
2、getInitialState
3、componentWillMount
4、render
5、componentDidMount
  存在
1、componentWillReceiveProps
2、shouldComponentUpdate
3、componentWillUpdate
4、render
5、componentDidUpdate
  销毁
1、getInitialState
2、componentWillMount
3、render
4、componentDidMount
 */