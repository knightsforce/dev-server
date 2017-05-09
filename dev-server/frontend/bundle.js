import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App, {store/*, history*/} from './components/App';
//import {ConnectedRouter} from 'react-router-redux';

//import { Route, IndexRoute } from 'react-router-dom';

//import CabinetClient from './CabinetClient';

//import { RouterPaths } from 'React-Routing';

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('cabinetBlock')
);

/*
render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={CabinetClient}/>
			</Route>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('cabinetBlock')
);
*/