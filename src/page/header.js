/*
 *目录导航 
 *
*/
import React , { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import  {Menu} from 'element-react';
import 'element-theme-default';

export default class Head extends Component {
	render(){
		return(
			 <div>
		      <Menu theme="dark" defaultActive="1" className="el-menu-demo" mode="horizontal" >
		        <Menu.Item index="1">快速开始</Menu.Item>
		        {/*<Menu.Item index="3">订单管理</Menu.Item>*/}
		      </Menu>
		      
		    </div>
		)
	}
}