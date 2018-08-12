import axios from 'axios';

import {
	GET_DEV,
	DEV_LOADING,
	//GET_ERRORS,
	//SET_CURRENT_CLIENT
	CLEAR_CURRENT_DEV
} from './types';

// Get current dev profile
export const getCurrentDev = () => (dispatch) => {
	dispatch(setDevLoading());
	axios
		.get('/api/dev')
		.then((res) =>
			dispatch({
				type: GET_DEV,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_DEV,
				payload: {}
			})
		);
};
// Dev Profile loading
export const setDevLoading = () => {
	return {
		type: DEV_LOADING
	};
};

// Clear dev profile
export const clearCurrentDev = () => {
	return {
		type: CLEAR_CURRENT_DEV
	};
};
