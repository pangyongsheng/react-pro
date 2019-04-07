/*
 *目录导航 
 *
*/
import React , { Component } from 'react';
import {  Link, Route, Redirect,Switch} from 'react-router-dom';
import { Layout } from 'element-react';
import 'element-theme-default';



import Head from './header'
import MenuLeft from './menuLeft'
import MenuRight from './menuRight'
import item from './item'

import "../styles/menu.less"

export default class Aa extends Component {
    render() {
        return  <React.Fragment>
         	<Layout.Row className="menu">
	        	<Head></Head>
	        	<Layout.Row>
		        	<Layout.Col span="4">
		        		<MenuLeft list={item}/>
					</Layout.Col>
					<Layout.Col span="20" className="right">
					    <MenuRight list={item}/>
		        	</Layout.Col>
		        </Layout.Row>
	        </Layout.Row>
		 </React.Fragment>
    }
}
