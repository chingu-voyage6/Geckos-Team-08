import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
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
			<section className="landing-callout blue lighten-4 text-center container-fluid">
				<h3>Welcome to !SocialCoder</h3>
				<div className="container valign-wrapper jc-center">
					<div className="valign center-align black-text">
						<p className="big">
							A community where prospective developers volunteer to assist charity and social
							organisations with software development.
						</p>

						<div className="container">
							<div className="row">
								<div className="col-md-4">
									<div className="well">
										<p className="flowtext hide-on-small-only">
											Sign up for free and join the community to...
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
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
