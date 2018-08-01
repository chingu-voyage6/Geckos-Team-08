import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	render() {
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

export default Navbar;
