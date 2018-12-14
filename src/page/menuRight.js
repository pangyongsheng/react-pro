/*
 *目录右侧内容
 *
*/
import React , { Component } from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import { Layout } from 'element-react';
import 'element-theme-default';

import  { A,B,C,D,E,F,G,H,I,J,K,L,M,N } from '../QuickStart';
//
export default class MenuRight extends Component{
	constructor(props){
		super(props)
	}

	list(){
		return this.props.list.map((li,index) => 
			<Route key={index} component={li.Comp} path={li.Path}></Route>
		)
	}

	render(){
		return(
			<div className="contain">
		    	<Switch>
		    		{this.list()}
			    	<Redirect path="/" to="/a" />
			    </Switch>
		    </div>
		)
	}
}