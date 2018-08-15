import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//import classnames from 'classnames';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerClient } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';
import SelectListGroup from '../common/SelectListGroup';

class Register extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			password: '',
			password2: '',
			clientgroup: '',
			errors: {}
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentDidMount() {
		if (this.props.auth.isAuthenticated) {
			this.props.history.push('/dashboard');
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors });
		}
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit(e) {
		e.preventDefault();

		const newClient = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2,
			clientgroup: this.state.clientgroup
		};

		this.props.registerClient(newClient, this.props.history);
	}

	render() {
		const { errors } = this.state;

		// Select (array of) options for clientgroup
		const options = [
			{ label: 'Select your clientgroup...', value: '' },
			{ label: 'Developer', value: 'Developer' },
			{ label: 'Organisation', value: 'Organisation' }
		];

		return (
			<div className="register">
				<div className="container">
					<div className="row">
						<div className="col-md-8 m-auto">
							<h1 className="display- text-center">Sign up</h1>
							<p className="lead-1 text-center"> Create your !SocialCoder account</p>
							<form noValidate onSubmit={this.onSubmit}>
								<TextFieldGroup
									placeholder="Name"
									name="name"
									value={this.state.name}
									onChange={this.onChange}
									error={errors.name}
								/>
								<TextFieldGroup
									placeholder="Email"
									name="email"
									type="email"
									value={this.state.email}
									onChange={this.onChange}
									error={errors.email}
									info="This site uses Gravatar so if you want a profile image, use a Gravatar email"
								/>
								<TextFieldGroup
									placeholder="Password"
									name="password"
									type="password"
									value={this.state.password}
									onChange={this.onChange}
									error={errors.password}
								/>
								<TextFieldGroup
									placeholder="Confirm Password"
									name="password2"
									type="password"
									value={this.state.password2}
									onChange={this.onChange}
									error={errors.password2}
								/>
								<SelectListGroup
									name="clientgroup"
									value={this.state.clientgroup}
									onChange={this.onChange}
									options={options}
									error={errors.clientgroup}
									info="Select: Are you a developer? Or an Organisation?"
								/>
								<input type="submit" className="btn btn-info btn-block mt-4" />
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Register.propTypes = {
	registerClient: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(mapStateToProps, { registerClient })(withRouter(Register));
