import React, { Component } from 'react';

//State & 生命周期

export default class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date() } //声明state
    }
    //设置默认的props，也可以用dufaultProps设置组件的默认属性.
    // getDefaultProps() {
    //     console.log("getDefaultProps");
    // }
    //组件初始化时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state。
    componentWillMount() {
        console.log("componentWillMount");
    }
    //组件渲染之后调用，只调用一次。
    componentDidMount() { //
         console.log("componentDidMount");
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    //组件初始化时不调用，组件接受新的props时调用。
    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps");
        console.log(nextProps);
    }
    /*
        组件接受新的state或者props时调用，
        我们可以设置在此对比前后两个props和state是否相同，
        如果相同则返回false阻止更新，
        因为相同的属性状态一定会生成相同的dom树，
        这样就不需要创造新的dom树和旧的dom树进行diff算法对比，
        节省大量性能，尤其是在dom结构复杂的时候
    */
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate");
        console.log(nextProps);
        console.log(nextState);
        return true;
    }
    //组件初始化时不调用，只有在组件将要更新时才调用，此时可以修改state
    componentWillUpdata(nextProps, nextState){
        console.log("componentWillUpdata");
    }

    //组件初始化时不调用，组件更新完成后调用，此时可以获取dom节点。
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
    //组件将要卸载时调用，一些事件监听和定时器需要在此时清除。
    componentWillUnmount() {
        console.log("componentWillUnmount");
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