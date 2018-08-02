import { GET_ERRORS } from '../actions/types';

// initialState set to an empty object, so the object is the error object itself
const initialState = {};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_ERRORS:
			return action.payload;
		default:
			return state;
	}
}
