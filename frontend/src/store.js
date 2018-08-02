import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// We called reducers index.js so no need to put that there
import rootReducer from './reducers';

// Chose not to have initialState for our createStore, so just create //a variable and set it to an empty object as below
const initialState = {};

const middleware = [ thunk ];

const store = createStore(
	rootReducer,
	initialState,
	compose(
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;
