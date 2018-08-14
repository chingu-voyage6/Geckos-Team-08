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

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors });
		}
	}

	onSubmit(e) {
		e.preventDefault();

		console.log('submit');
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	render() {
		const { errors, displaySocialInputs } = this.state;

		let socialInputs;

		if (displaySocialInputs) {
			socialInputs = (
				<div>
					<InputGroup
						placeholder="Twitter Profile URL"
						name="twitter"
						icon="fab fa-twitter"
						value={this.state.twitter}
						onChange={this.onChange}
						errors={errors.twitter}
					/>

					<InputGroup
						placeholder="Facebook Profile URL"
						name="facebook"
						icon="fab fa-facebook"
						value={this.state.facebook}
						onChange={this.onChange}
						errors={errors.facebook}
					/>

					<InputGroup
						placeholder="Linkedin Profile URL"
						name="linkedin"
						icon="fab fa-linkedin"
						value={this.state.linkedin}
						onChange={this.onChange}
						errors={errors.linkedin}
					/>

					<InputGroup
						placeholder="Youtube Profile URL"
						name="youtube"
						icon="fab fa-youtube"
						value={this.state.youtube}
						onChange={this.onChange}
						errors={errors.youtube}
					/>

					<InputGroup
						placeholder="Instagram Profile URL"
						name="instagram"
						icon="fab fa-instagram"
						value={this.state.instagram}
						onChange={this.onChange}
						errors={errors.instagram}
					/>
				</div>
			);
		}

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
									options={options}
									error={errors.status}
									info="Share information with interested parties where you are at this present time in your career"
								/>
								<TextFieldGroup
									placeholder="Company"
									name="company"
									value={this.state.company}
									onChange={this.onChange}
									error={errors.company}
									info="Company you work for or your own company, if any"
								/>
								<TextFieldGroup
									placeholder="Website"
									name="website"
									value={this.state.website}
									onChange={this.onChange}
									error={errors.website}
									info="Website of company you work for or your own website, if any"
								/>
								<TextFieldGroup
									placeholder="Location"
									name="location"
									value={this.state.location}
									onChange={this.onChange}
									error={errors.location}
									info="City and country, or city state and country (e.g, London, UK"
								/>
								<TextFieldGroup
									placeholder="Skills"
									name="skills"
									value={this.state.skills}
									onChange={this.onChange}
									error={errors.skills}
									info="Please state skills you have using comma separated values (e.g, HTML, CSS, JavaScript, NodeJS, Ruby on Rails, PHP etc)"
								/>
								<TextFieldGroup
									placeholder="Github username"
									name="githubusername"
									value={this.state.githubusername}
									onChange={this.onChange}
									error={errors.githubusername}
									info="To show your repos and github link, please enter your username, if any"
								/>
								<TextAreaFieldGroup
									placeholder="Short Personal Info"
									name="bio"
									value={this.state.bio}
									onChange={this.onChange}
									error={errors.bio}
									info="Give us a brief information about yourself"
								/>

								<div className="mb-3">
									<button
										onClick={() => {
											this.setState((prevState) => ({
												displaySocialInputs: !prevState.displaySocialInputs
											}));
										}}
										className="btn btn-light"
									>
										Add Social Network Links
									</button>
									<span className="text-muted">Optional</span>
								</div>
								{socialInputs}
								<input type="submit" value="Submit" className="btn btn-info btn-block mt-4" />
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
