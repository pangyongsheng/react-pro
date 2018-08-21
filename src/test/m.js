import React , { Component } from 'react';
import TemperatureInput from './l';


//状态提升

//华氏转摄氏
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
//摄氏转华氏
function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
//温度装换
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
//水是否烧开状态显示组件
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>水会烧开</p>;
  }
  return <p>水不会烧开</p>;
}

export default class Aa extends Component {
	constructor(props) {
	    super(props);
	    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
	    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
	    this.state = {temperature: '', scale: 'c'};
  	}

	handleCelsiusChange(temperature) {
		this.setState({scale: 'c', temperature});
	}

	handleFahrenheitChange(temperature) {
		this.setState({scale: 'f', temperature});
	}

	render(){
		const scale =  this.state.scale;
		const temperature = this.state.temperature;
		const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    	const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
		return (
	      <div>
	        <TemperatureInput scale="c"  temperature={celsius}  onTemperatureChange={this.handleCelsiusChange} />
	        <TemperatureInput scale="f"  temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>
	        <BoilingVerdict celsius={parseFloat(celsius)} />
	      </div>
	    );
	}
}
