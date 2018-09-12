import React , { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Ca from './a'
import Cb from './b'
import Cc from './c'

export default class Aa extends Component {
    render() {
        return <Router>
        	<nav>
        		<Link to="/">首页</Link>
		   		<Link to="/b">电影</Link>
		    	<Link to="/c">关于</Link>
		    	<Route exact path="/" component={Ca}></Route>
		    	<Route path="/b" component={Cb}></Route>
		    	<Route path="/c" component={Cc}></Route>
        	</nav>
		</Router>
    }
}