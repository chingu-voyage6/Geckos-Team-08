import {
	GET_DEV,
	DEV_LOADING,
	//GET_ERRORS,
	//SET_CURRENT_CLIENT,
	CLEAR_CURRENT_DEV
} from '../actions/types';

const initialState = {
	devProfile: null,
	//	devProfiles: null,
	loading: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case DEV_LOADING:
			return {
				...state,
				loading: true
			};
		case GET_DEV:
			return {
				...state,
				devProfile: action.payload,
				loading: false
			};
		case CLEAR_CURRENT_DEV:
			return {
				...state,
				devProfile: null
			};
		default:
			return state;
	}
}
