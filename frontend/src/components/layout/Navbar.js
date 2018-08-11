import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutClient } from '../../actions/authActions';
import { clearCurrentDev } from '../../actions/devActions';

class Navbar extends Component {
	onLogoutClick(e) {
		e.preventDefault();
		this.props.clearCurrentDev();
		this.props.logoutClient();
	}

	render() {
		const { isAuthenticated, client } = this.props.auth;

		const authLinks = (
			<ul className="navbar-nav ml-auto">
				<li className="nav-item">
					<Link className="nav-link" to="/dashboard">
						Dashboard
					</Link>
				</li>
				<li className="nav-item">
					<a href="" onClick={this.onLogoutClick.bind(this)} className="nav-link">
						<img
							className="rounded-circle"
							src={client.avatar}
							alt={client.name}
							style={{ width: '25px', marginRight: '5px' }}
							title="You must have a Gravatar connected to your email to display an image"
						/>{' '}
						Logout
					</a>
				</li>
			</ul>
		);

		const guestLinks = (
			<ul className="navbar-nav ml-auto">
				<li className="nav-item">
					<Link className="nav-link" to="/register">
						Sign Up
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/login">
						Login
					</Link>
				</li>
			</ul>
		);

		const orgLinks = (
			<ul className="navbar-nav mr-auto">
				<li className="nav-item">
					<Link className="nav-link" to="/org">
						{' '}
						Organisation
					</Link>
				</li>
			</ul>
		);

		const devLinks = (
			<div className="collapse navbar-collapse" id="mobile-nav">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<Link className="nav-link" to="/dev">
							{' '}
							Developers
						</Link>
					</li>
				</ul>
			</div>
		);

		const seekLinks = (
			<ul className="navbar-nav mr-auto">
				<li className="nav-item">
					<a className="nav-link" href="seek.html">
						{' '}
						Seeking..
					</a>
				</li>
			</ul>
		);

		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container">
					<Link className="navbar-brand" to="/">
						!SocialCoder
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbar-nav"
						aria-controls="navbar-nav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>

					<div className="collapse navbar-collapse" id="navbar-nav">
						<ul className="navbar-nav mr-auto">
							<span className="sr-only">(current) </span>
						</ul>
						{isAuthenticated ? authLinks : guestLinks}
					</div>
					<div className="collapse navbar-collapse" id="mobile-nav">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<Link className="nav-link right" to="/register">
									{' '}
									Sign Up
								</Link>
							</li>
						</ul>
					</div>
					<div className="collapse navbar-collapse" id="mobile-nav">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<Link className="nav-link" to="/dev">
									{' '}
									Developer
								</Link>
							</li>
						</ul>
						{isAuthenticated ? [ devLinks && authLinks && seekLinks ] : guestLinks}
						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<Link className="nav-link" to="/org">
									{' '}
									Organisation
								</Link>
							</li>
						</ul>
						{isAuthenticated ? [ orgLinks && seekLinks ] : guestLinks}
					</div>
				</div>
			</nav>
		);
	}
}

Navbar.propTypes = {
	logoutClient: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps, { logoutClient, clearCurrentDev })(Navbar);
