import React, { Component } from 'react';

// 显示html文本组件

export default class Aa extends Component {
	constructor(props){
		super(props);
		this.state = {
			innerHtml: this.props.innerHtml,
			style:this.props.style
		}

	 }

	 setInnerHtml(data){	//修改内容
	 	this.setState({
	 		...this.state,
	 		...data
	 	})
	 }

    render() {
        return <div style={{...this.state.style}} dangerouslySetInnerHTML={{ __html: this.state.innerHtml }} />;
    }
}									