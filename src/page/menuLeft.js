/*
 *目录左侧导航
 *
*/
import React , { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Layout } from 'element-react';
import 'element-theme-default';

//

export default class menuLeft extends Component {

	static defaultProps : {
		list:[
			{to:"/a",name:"主页"},
			{to:"/b",name:"state,生命周期"},
			{to:"/c",name:"事件"}
		]
	}

	constructor(props){
		super(props)
	}

	list(){
		return this.props.list.map((li,index) =>
			<NavLink key={index} to={li.Path}  className="left" activeClassName="selected" replace>{li.Text}</NavLink>	
		);
	}

	render(){
		return(
			<nav className="nav">
				{this.list()}
        	</nav>
		)
	}
}
