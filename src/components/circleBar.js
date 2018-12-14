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
        position: "absolute",
        display:"flex"
    },

    text: {
        fontSize: "16px",
        color: "#888"
    }
}
//角度转化
const deg = number => `${number}deg`;
//disabled
function Disabled(props){
	let { radius , disabledText ,percent} = props.data;
	let diameter = radius * 2;

	return (
		<div style={{
				...styles.circle,
				width:diameter,
				height:diameter,
				borderRadius:radius
			}}>
			<span style={styles.text}>{parseInt(percent)}%</span>
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
    let leftTransformerDegree = deg(half ? (percent - 50) * 3.6 : 0);

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
				<span style={{...styles.text,...textStyle}}>{parseInt(percent)}%</span> 
			)}
		</div>
	)
}
//圆形进度条组件
export default class _circle extends Component{
	static defaultProps={
		radius:80,
		percent: 30,
		borderWidth: 5,
		bgcolor: "#e2e3e3",
		color:"#00a100",
		innerColor: "#fff",
		rotate: 0,
		textStyle: {},
	}

	constructor(props){
		super(props);
		//window.$instanceMap.set(this.state.id, this);
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

_circle.propTypes = {
	/*外圆半径*/
	radius: PropTypes.number,
	/* 进度（百分比分子）*/
	percent: PropTypes.number,
	/*进度条颜色*/
	color: PropTypes.string,
	/*背景条颜色*/
	bgcolor: PropTypes.string,
	/*环内区域背景色*/
	innerColor: PropTypes.string, 
	/* 环厚度（同心圆半径差值）*/
	borderWidth: PropTypes.number, 
	/*文字样式*/
	textStyle: PropTypes.object,
	/*是否可用*/
	disabled: PropTypes.bool,
	/*进度环起点与 12 点方向的夹角 0 - 360 度*/
	rotate: PropTypes.number

}