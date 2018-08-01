import React, { Component } from 'react';

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
				<div className="container">
					<a className="navbar-brand" href="landing.html">
						!SocialCodes
					</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
						<span className="navbar-toggler-icon" />
					</button>

					<div className="collapse navbar-collapse" id="mobile-nav">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<a className="nav-link" href="dev_profiles.html">
									{' '}
									Developers
								</a>
							</li>
						</ul>

						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<a className="nav-link" href="org_profiles.html">
									{' '}
									Organisations
								</a>
							</li>
						</ul>

						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<a className="nav-link" href="register.html">
									Sign Up
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="login.html">
									Login
								</a>
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
