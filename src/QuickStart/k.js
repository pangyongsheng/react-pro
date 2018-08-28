import React , { Component } from 'react';

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>水会烧开</p>;
  }
  return <p>水不会烧开</p>;
}
//状态提升
export default class Aa extends Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state={temperature:''}
	}
	handleChange(e){
		this.setState({temperature:e.target.value})
	}
	render(){
		const temperature = this.state.temperature;
		return(
			<fieldset>
				<legend>输入一个摄氏温度</legend>
				<input value={temperature} onChange={this.handleChange} />
				<BoilingVerdict celsius={parseFloat(temperature)} />
			</fieldset>
		)
	}
}
