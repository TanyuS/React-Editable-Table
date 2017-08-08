import React from 'react';
import {Provider} from 'react-redux';
import store from '../../../redux/index';
import {Switch, Route, Redirect} from 'react-router-dom';
import routes from '../routes';

const AppRouter = () => (
	<Provider store={store}>
		<Switch>
			{routes.map(({path, component}, i) => (
				<Route key={i} path={`/${path}`} component={component}/>
			))}
			<Redirect from="/" to="index.html"/>
		</Switch>
	</Provider>
);

export default AppRouter;
