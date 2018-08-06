import axios from 'axios';

import {
	GET_DEV_PROFILE,
	DEV_PROFILE_LOADING,
	//GET_ERRORS,
	//SET_CURRENT_CLIENT
	CLEAR_CURRENT_DEV_PROFILE
} from './types';

// Get current dev profile
export const getCurrentDevProfile = () => (dispatch) => {
	dispatch(setDevProfileLoading());
	axios
		.get('/api/dev')
		.then((res) =>
			dispatch({
				type: GET_DEV_PROFILE,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_DEV_PROFILE,
				payload: {}
			})
		);
};
// Dev Profile loading
export const setDevProfileLoading = () => {
	return {
		type: DEV_PROFILE_LOADING
	};
};

// Clear dev profile
export const clearCurrentDevProfile = () => {
	return {
		type: CLEAR_CURRENT_DEV_PROFILE
	};
};
