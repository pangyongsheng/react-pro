import React , { Component } from 'react';
//状态提升
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>水会烧开</p>;
  }
  return <p>水不会烧开</p>;
}

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
		const scale = this.props.scale;
		return(
			<fieldset>
				<legend>enter temperature in {scaleNames[scale]}:</legend>
				<input value={temperature} onChange={this.handleChange} />
				<BoilingVerdict celsius={parseFloat(temperature)} />
			</fieldset>
		)
	}
}
