import axios from 'axios';
import { GET_ERRORS } from './types';

// Register Client
export const registerClient = (clientData, history) => (dispatch) => {
	axios.post('/api/clients/register', clientData).then((res) => history.push('/login')).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		})
	);
};
