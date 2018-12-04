/*
 *目录导航 
 *
*/
import React , { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Qa from '../QuickStart/a'
import Qb from '../QuickStart/b'
import Qc from '../QuickStart/c'
import Qd from '../QuickStart/d'
import Qe from '../QuickStart/e'
import Qf from '../QuickStart/f'
import Qg from '../QuickStart/g'
import Qh from '../QuickStart/h'
import Qi from '../QuickStart/i'
import Qj from '../QuickStart/j'
import Qk from '../QuickStart/k'
import Ql from '../QuickStart/l'
import Qm from '../QuickStart/m'
import Qn from '../QuickStart/n'


export default class Aa extends Component {
    render() {
        return <Router>
        	<div>
	        	<nav className="nav">
	        		<Link to="/">组件</Link>
			   		<Link to="/b">state,生命周期</Link>
			    	<Link to="/c">事件</Link>
			    </nav>
			    <div className="contain">
			    	<Route exact path="/"  component={Qa}></Route>
			    	<Route path="/b" component={Qb}></Route>
			    	<Route path="/c" component={Qc}></Route>
			    </div>
        	</div>
		</Router>
    }
}
