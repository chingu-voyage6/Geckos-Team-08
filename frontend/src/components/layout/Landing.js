import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
class Landing extends Component {
	componentDidMount() {
		if (this.props.auth.isAuthenticated) {
			this.props.history.push('/dashboard');
		}
	}

	render() {
		return (
			<div className="landing-callout text-center container-fluid">
				<h3>Welcome to !SocialCoder</h3>
				<h8>
					A community where prospective developers volunteer to assist charity and social organisations with
					software development.
				</h8>

				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="well">
								<h3 className="text-center">Developers</h3>
								<h7>Sign up for free and join the community to...</h7>
								<br />
								<Link className="btn btn-primary btn-lg btn-block" to="/register">
									{' '}
									Developers
								</Link>

								<div className="col-md-6">
									<div className="well">
										<h3 className="text-center">Organisation</h3>
										<h7>Sign up for free and...</h7>
										<br />
										<Link className="btn btn-success btn-lg btn-block" to="/register">
											{' '}
											Organisation
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Landing.propTypes = {
	auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps)(Landing);
