import React, { Component } from 'react';

//非受控组件
export default class NameForm extends React.Component {
    
    static defaultProps={
       items:[
            {id:"a",term:"张三",description:"daadadada"},
            {id:"b",term:"张四",description:"daadadada"},
            {id:"c",term:"张五",description:"daadadada"}
       ]
    }

    constructor(props) {
        super(props);

    }



    render() {
        console.log(this.props.items);
        return (
            <dl>
                {
                    this.props.items.map(item => (
                        // 没有`key`，将会触发一个key警告
                        <React.Fragment key={item.id}>
                            <dt>{item.term}</dt>
                            <dd>{item.description}</dd>
                        </React.Fragment>
                    ))
                }
            </dl>
        );
    }
}