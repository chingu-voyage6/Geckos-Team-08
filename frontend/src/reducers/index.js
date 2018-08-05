import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import devProfileReducer from './devProfileReducer';
import orgProfileReducer from './orgProfileReducer';
import seekProfileReducer from './seekProfileReducer';

export default combineReducers({
	auth: authReducer,
	errors: errorReducer,
	devProfile: devProfileReducer,
	orgProfile: orgProfileReducer,
	seekProfile: seekProfileReducer
});
