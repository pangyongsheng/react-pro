import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router} from 'react-router-dom';

//import App from './App';
//import Art from './components/circleBar'
import App from './page/menu';
import './styles/index.less'
import store from './store.js';
//import { addToCart,updateCart,deleteFromCart }  from './actions/cart-actions';



ReactDOM.render(
	<Provider store={store}>
		<Router> 
			<App/>
		</Router>
	</Provider>,
	document.getElementById('root')
);
