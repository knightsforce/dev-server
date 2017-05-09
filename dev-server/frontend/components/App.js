import React, { Component } from 'react';

//import createHistory from 'history/createBrowserHistory';

import { createStore, applyMiddleware } from 'redux';
import { connect } from 'react-redux';

//import { routerMiddleware, push } from 'react-router-redux';

import rootReducer from '../lib/reducers';
import * as actions from '../lib/actions';
import flags, {statuses} from "../lib/flags";
import resources from '../lib/resources';

import thunk from 'redux-thunk';

import CabinetClient from './CabinetClient';

var initState = {
	orders: {

	}
}

/*let history = createHistory();
let routMiddleware = routerMiddleware(history);*/

const store = createStore(rootReducer, initState, applyMiddleware(/*routMiddleware, */thunk));

class App extends Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	render() {
		let {storeOrders} = this.props;
		let Component = null;
		
		switch(storeOrders.status) {
			case statuses.loadData:
				//Screen = <Load getCafeList={getCafeList} getFilters={getFilters}/>;
				break;
		}

		Component = null

		return (
				<div className="App">
					{Component}
				</div>
		);
  }
}

function mapStateToProps(state) {
	return {storeOrders: state.orders};
}

function mapDispatchToProps(dispatch) {
	return {
		/*getCafeList: ()=>{
			dispatch(actions.getCafeList);
		},*/
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
export {store/*, history*/};