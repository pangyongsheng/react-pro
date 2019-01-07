import React, { Component } from 'react';

//ref的使用

export default class Sa extends Component {
	constructor(props) {
		super(props);
		this.textInput = React.createRef();
	}

	focusText = () =>{
		console.log(this.textInput);
		this.textInput.current.focus();
	}

	focusText2 = () =>{
		console.log(this.textInput2);
		this.textInput2.focus();
	}

	render() {
		return(
			<div>
				<input
					type="text"
					ref={this.textInput}/>
				<input 
					type="button"
					value="fouce text input"
					onClick={this.focusText}/>
				<br/>
				<input
					type="text"
					ref={(el)=>{this.textInput2 = el}}/>
				<input 
					type="button"
					value="fouce text input2"
					onClick={this.focusText2}/>
			</div>
		)
	}
}