import { combineReducers } from 'redux';

//import { routerReducer } from 'react-router-redux';

import flags from "./flags";

function orders(storeOrders={}, action) {
	switch(action.type) {
		case flags.complite:
			
			});
			break;
	}
	return storeOrders;
}

let rootReducer = combineReducers({
	orders,
	//router: routerReducer,
});

export default rootReducer;