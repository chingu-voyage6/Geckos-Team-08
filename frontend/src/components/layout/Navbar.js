import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutClient } from '../../actions/devProfileActions';
import { clearCurrentDevProfile } from '../../actions/devProfileActions';

class Navbar extends Component {
	onLogoutClick(e) {
		e.preventDefault();
		this.props.clearCurrentDevProfile();
		this.props.logoutClient();
	}

	render() {
		const { isAuthenticated, client } = this.props.isAuthenticated;

		const authLinks = (
			<ul className="navbar-nav ml-auto">
				<li className="nav-item">
					<a href="#" onClick={this.onLogoutClick.bind(this)} className="nav-link">
						<img
							src={client.avatar}
							alt={client.name}
							style={{ width: '25px', marginRight: '5px' }}
							title="You must have a Gravatar connected to your email to display an image"
						/>
						Logout
					</a>
					{/*             <Link className="nav-link" to="/register"> */}
					{/*                     Register */}
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
			<nav className="navbar navbar-default navbar-static-top role=navigation">
				<div className="container">
					<Link className="navbar-brand" to="/register">
						!SocialCodes
					</Link>
					<button
						className="navbar-toggle-collapsed"
						type="button"
						data-toggle="collapse"
						data-target="#mobile-nav"
						sans-serif
					>
						<span className="navbar-toggler-icon" />
					</button>

					<div className="collapse navbar-collapse" id="mobile-nav">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<Link className="nav-link" to="/dev_profiles">
									{' '}
									Developers
								</Link>
							</li>
						</ul>

						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<Link className="nav-link" to="/org_profiles">
									{' '}
									Organisations
								</Link>
							</li>
						</ul>

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

						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<a className="nav-link" href="seek_profiles.html">
									{' '}
									Seeking..
								</a>
							</li>
						</ul>
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
