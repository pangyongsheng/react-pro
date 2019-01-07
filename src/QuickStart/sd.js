import React, { Component } from 'react';

//子组件
 class EleChild extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
        <div>
      		{this.props.children}
    	</div>
    );
  }
}


export default class Sd extends React.Component{
	render() {
		return (
			<EleChild>
				<h1>你好</h1>
				<h2>hello</h2>
			</EleChild>
	)}
}