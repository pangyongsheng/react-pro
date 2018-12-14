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

// console.log("initial state: ", store.getState());

// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// );


// store.dispatch(addToCart('Coffee 500gm', 1, 250));
// store.dispatch(addToCart('Flour 1kg', 2, 110));
// store.dispatch(addToCart('Juice 2L', 1, 250));
// store.dispatch(updateCart('Flour 1kg', 5, 110));
// store.dispatch(deleteFromCart('Coffee 500gm'));


// unsubscribe();


ReactDOM.render(
	<Provider store={store}>
		<Router> 
			<App/>
		</Router>
	</Provider>,
	document.getElementById('root')
);
