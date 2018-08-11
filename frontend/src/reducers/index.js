import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import devReducer from './devReducer';

export default combineReducers({
	auth: authReducer,
	errors: errorReducer,
	devProfile: devReducer
});
