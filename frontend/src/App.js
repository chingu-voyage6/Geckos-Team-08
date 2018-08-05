import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentClient, logoutClient } from './actions/authActions';
import { clearCurrentDevProfile } from './actions/devProfileActions';

import { Provider } from 'react-redux';
import store from './store';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';

import './App.css';

// Check for token
if (localStorage.jwtToken) {
	// Set auth token header to auth
	setAuthToken(localStorage.jwtToken);

	// Decode token and get client info and expiry
	const decoded = jwt_decode(localStorage.jwtToken);

	// Set client and isAuthenticated
	store.dispatch(setCurrentClient(decoded));

	// Check for expired token
	const currentTime = Date.now() / 1000;
	if (decoded.exp < currentTime) {
		// Logout client
		store.dispatch(logoutClient());

		// Clear current dev profile
		store.dispatch(clearCurrentDevProfile());

		// Redirect to login - or where? *****
		window.location.href = '/login';
	}
}
class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div className="App">
						<Navbar />
						<Route exact path="/" component={Landing} />
						<div className="component">
							<Route exact path="/register" component={Register} />
							<Route exact path="/login" component={Login} />
							<Route exact path="/dashboard" component={Dashboard} />
						</div>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
