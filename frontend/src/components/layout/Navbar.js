import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutClient } from '../../actions/authActions';
import { clearCurrentDevProfile } from '../../actions/devProfileActions';

class Navbar extends Component {
	onLogoutClick(e) {
		e.preventDefault();
		this.props.clearCurrentDevProfile();
		this.props.logoutClient();
	}

	render() {
		const { isAuthenticated, client } = this.props.auth;

		const authLinks = (
			<ul className="navbar-nav ml-auto">
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

		const guestAuthLinks = (
			<ul className="navbar-nav ml-auto">
				<li className="nav-item">
					<Link className="nav-link" to="/register">
						Register
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/login">
						Login
					</Link>
				</li>
			</ul>
		);

		const orgAuthLinks = (
			<ul className="navbar-nav mr-auto">
				<li className="nav-item">
					<Link className="nav-link" to="/org_profiles">
						{' '}
						Organisations
					</Link>
				</li>
			</ul>
		);

		const devAuthLinks = (
			<div className="collapse navbar-collapse" id="mobile-nav">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<Link className="nav-link" to="/dev_profiles">
							{' '}
							Developers
						</Link>
					</li>
				</ul>
			</div>
		);

		const orgSeekAuthLinks = (
			<ul className="navbar-nav mr-auto">
				<li className="nav-item">
					<a className="nav-link" href="seek_profiles.html">
						{' '}
						Seeking..
					</a>
				</li>
			</ul>
		);

		return (
			<nav className="navbar navbar-light navbar-static-top role=navigation mb-4">
				<div className="container">
					<Link className="navbar-brand" to="/">
						!SocialCoder
					</Link>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
						<span className="navbar-toggler-icon" />
					</button>

					<div className="collapse navbar-collapse" id="mobile-nav">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<Link className="nav-link" to="/dev-profile">
									{' '}
									Developer
								</Link>
							</li>
						</ul>
						{isAuthenticated ? devAuthLinks : orgSeekAuthLinks}
						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<Link className="nav-link" to="/org-profile">
									{' '}
									Organisation
								</Link>
							</li>
						</ul>
						{isAuthenticated ? orgAuthLinks : guestAuthLinks}
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

export default connect(mapStateToProps, { logoutClient, clearCurrentDevProfile })(Navbar);
