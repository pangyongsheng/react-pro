import React, { Component } from 'react';
import Art from '../components/circleBar'

export default class Test extends Component{
	constructor(props){
		super(props);
		this.state={
			percent:10
		}

	}

	componentDidMount(){
		let self = this;
		this.intavl = setInterval(()=>{
			let s = this.state.percent % 100;
			
			s +=0.5;
			
			self.setState({
				percent:s
			})
		},100)
	}


	render(){
		return(
		<React.Fragment>
			<Art percent={this.state.percent}  disabled={true}/>
		</React.Fragment>)
		
	}
}