import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import api from './middlewares/api';
import reducers from './reducers/index';

export default createStore(
	reducers,
	compose(applyMiddleware(
		thunk,
		api
	))
);
