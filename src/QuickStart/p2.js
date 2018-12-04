import React , { Component } from 'react';
import PropTypes from 'prop-types';
//refs的使用
export default class Comp extends Component{
	constructor(props){
		super(props);
		this.textInput = React.createRef();
		this.focusTextInput = this.focusTextInput.bind(this);
	}

	focusTextInput(){
		//当一个 ref 使用 ref 中的 current 属性对节点的引用进行访问
		this.textInput.current.focus();
	}

	render(){
		return ( <div>
        <input
          type="text"
          ref={this.textInput} />

          
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>)
	}
}