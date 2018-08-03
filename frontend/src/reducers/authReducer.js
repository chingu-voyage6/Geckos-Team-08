import isEmpty from '../validation/is-empty';

import { SET_CURRENT_CLIENT } from '../actions/types';

const initialState = {
	isAuthenticated: false,
	client: {}
};

export default function(state = initialState, action) {
	switch (action.type) {
		case SET_CURRENT_CLIENT:
			return {
				...state,
				isAuthenticated: action.payload,
				client: action.payload
			};
		default:
			return state;
	}
}

// export default function(state = initialState, action) {
// 	switch (action.type) {
// 		default:
// 			return state;
// 	}
// }
