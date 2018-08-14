import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';

class CreateDevProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displaySocialInputs: false,
			clienthandle: '',
			//clientgroup: '',
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

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();

		console.log('submit');
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	render() {
		const { errors } = this.state;

		// Select (array of) options for status
		const options = [
			{ label: '* Select Professional Status', value: 0 },
			{ label: 'Developer', value: 'Developer' },
			{ label: 'Junior Dev', value: 'Junior Developer' },
			{ label: 'Mid Dev', value: 'Mid Developer' },
			{ label: 'Senior Dev', value: 'Senior Developer' },
			{ label: 'Proj Mgr', value: 'Project Manager' },
			{ label: 'Student or Learner', value: 'Student or Learner' },
			{ label: 'Instructor or Trainer', value: 'Instructor or Trainer' },
			{ label: 'Intern', value: 'Intern' },
			{ label: 'Other', value: 'Other' }
		];

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
							<form onSubmit={this.onSubmit}>
								<TextFieldGroup
									placeholder="* Dev clienthandle"
									name="handle"
									value={this.state.clienthandle}
									onChange={this.onChange}
									error={errors.clienthandle}
									info="A unique clienthandle or username for your prfile is required for your URL - full name, company name, nickname"
								/>
								<SelectListGroup
									placeholder="Status"
									name="status"
									value={this.state.status}
									onChange={this.onChange}
									error={errors.status}
									info="Share information with interested parties where you are this present time in your career"
								/>
							</form>
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
