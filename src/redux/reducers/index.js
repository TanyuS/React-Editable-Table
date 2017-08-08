import {combineReducers} from 'redux';

import statTableReducer from './statTable';

export default combineReducers({
	stat: statTableReducer
});
