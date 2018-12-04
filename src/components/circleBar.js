import React, { Component } from 'react';
import PropTypes from 'prop-types';
//基本样式
const styles = {
	circle: {
		display:"flex",
        overflow: "hidden",
        position: "relative",
        margin:"auto",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e3e3e3"
    },

    Wrap: {
        overflow: "hidden",
        position: "absolute",
        top: 0
    },

    loader: {
        position: "absolute",
        left: 0,
        top: 0
    },

    innerCircle: {
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute"
    },

    text: {
        fontSize: 11,
        color: "#888"
    }
}
//角度转化
const deg = number => `${number}deg`;
//disabled
function Disabled(props){
	let { radius , disabledText } = props.data;
	let diameter = radius * 2;

	return (
		<div>
			<div style={{
				...styles.circle,
				width:diameter,
				height:diameter,
				borderRadius:radius
			}}/>
			<span>{styles.text}</span>
		</div>
	);
}
//right
function RightTransformer(props){
	let { radius, rotate, color, percent } = props.data;
	let diameter = radius * 2;
	let half = percent >= 50;
	let RightTransformerDegree = deg(half ? 180 : percent * 3.6);

	return (
		<div style={{
			...styles.Wrap,
			width: radius,
			height: diameter,
			left: radius
		}}>
			<div style={{
				...styles.loader,
				left: -radius,
				width: radius,
				height: diameter,
				backgroundColor: color,
				transformOrigin: `${radius}px`,
				transform: `rotate(${RightTransformerDegree})`
			}}/>
		</div>
	)
}
//left
function LeftTransformer(props) {
    let { radius, rotate, color, bgcolor, percent } = props.data;
    let diameter = radius * 2;
    let half = percent >= 50;
    let leftTransformerDegree = deg(half ? (percent - 50) * 3.6 : 180);

    return (
        <div
	      style={{
				...styles.Wrap,
	        	width: radius,
	          	height: diameter,
	          	left: 0
	      }}
	    >
	      <div
	        style={{
	          	...styles.loader,
	            left: radius,
	            width: radius,
	            height: diameter,
	            backgroundColor: color,
	            transformOrigin: `0px ${radius}px`,
	            transform: `rotate(${leftTransformerDegree})`
	          }}
	      />
	    </div>
    );
}
//inner
function InnerCircle(props){
	let {
		radius,
		borderWidth,
		innerColor,
		percent,
		textStyle,
		children
	} = props.data;

	if(borderWidth < 2) borderWidth = 2;


	return(
		<div style={{
			...styles.innerCircle,
			width: (radius - borderWidth) * 2,
			height: (radius - borderWidth) * 2,
			borderRadius: radius - borderWidth,
			backgroundColor: innerColor
		}}>
			{children ? (
				children
			):(
				<span style={{...styles.text,textStyle}}>{percent}%</span> 
			)}
		</div>
	)
}
//圆形进度条组件
export default class _circle extends Component{
	static defaultProps={
		textStyle: [],
		percent: 0,
		borderWidth: 2,
		bgcolor: "#e2e3e3",
		innerColor: "#fff",
		rotate: 0
	}

	constructor(props){
		super(props);

		this.state = {
			score : 0
		}

		//window.$instanceMap.set(this.state.id, this);
	}

	componDidMount(){
		
	}

	render(){
		let { bgcolor, disabled, radius } = this.props;
        let diameter = radius * 2;

        return disabled ? (
        	<Disabled data={this.props}/>
        ):(
        	<div style={{
        			...styles.circle,
        			width: diameter,
        			height: diameter,
        			borderRadius: radius,
        			backgroundColor: bgcolor
        		}}>
        		{/* 右侧半圆 */}
        		<RightTransformer data={this.props} />
        		{/* 左侧半圆 */}
        		<LeftTransformer data={this.props} />
        		{/* 内部圆环 */}
        		<InnerCircle data={this.props} />
        	</div>
        )
	}


}

// _circle.propTypes = {
// 	/*进度条颜色*/
// 	color: React.PropTypes.string,
// 	/*背景条颜色*/
// 	bgcolor: React.PropTypes.string,
// 	/*环内区域背景色*/
// 	innerColor: React.PropTypes.string, 
// 	/*外圆半径*/
// 	radius: React.PropTypes.number,
// 	/* 进度（百分比分子）*/
// 	percent: React.PropTypes.number,
// 	/* 环厚度（同心圆半径差值）*/
// 	borderWidth: React.Proptypes.number, 
// 	/*文字样式*/
// 	textStyle: React.Proptypes.array,
// 	/*是否可用*/
// 	disabled: React.PropTypes.bool,
// 	/*进度环起点与 12 点方向的夹角 0 - 360 度*/
// 	rotate: React.PropTypes.number

// }