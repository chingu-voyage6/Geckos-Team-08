import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';

class CreateDevProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displaySocialInputs: false,
			clienthandle: '',
			clientgroup: '',
			company: '',
			website: '',
			location: '',
			bio: '',
			status: '',
			githubusername: '',
			skills: '',
			youtube: '',
			twitter: '',
			facebook: '',
			linkedin: '',
			instagram: '',
			errors: {}
		};
	}

	render() {
		return (
			<div className="create-dev">
				<div className="container">
					<div className="row">
						<div className="col-md-8 m-auto">
							<h1 className="display-4 text-center">Create Your Developer Profile</h1>
							<p className="lead text-center">
								Give some information here to make your profile standout and attractive
							</p>
							<small className="d-block pb-3">* = required fields</small>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

CreateDevProfile.propTypes = {
	devProfile: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	devProfile: state.devProfile,
	errors: state.errors
});

export default connect(mapStateToProps)(CreateDevProfile);
