import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import classnames from 'classnames';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerClient } from '../../actions/authActions';

class Register extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			password: '',
			password2: '',
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

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit(e) {
		e.preventDefault();

		const newClient = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2
		};

		this.props.registerClient(newClient, this.props.history);
	}

	render() {
		const { errors } = this.state;

		return (
			<div className="register">
				<div className="container">
					<div className="row">
						<div className="col-md-8 m-auto">
							<h1 className="display- text-center">Sign up</h1>
							<p className="lead-1 text-center"> Create your !SocialCoder account</p>
							<form onSubmit={this.onSubmit}>
								<div className="form-group">
									<input
										type="text"
										className="form-control-form-control-lg"
										placeholder="Name"
										name="name"
										value={this.state.name}
										onChange={this.onChange}
									/>{' '}
								</div>
								<div className="form-group">
									<input
										type="email"
										className="form-control-form-control-lg"
										placeholder="Email Address"
										name="email"
										value={this.state.email}
										onChange={this.onChange}
									/>
									<small className="form-text text-muted">
										This site uses Gravatar so if you want an image on your profile, its best to use
										a Gravatar email
									</small>
								</div>
								<div className="form-group">
									<input
										type="password"
										className="form-control-form-control-lg"
										placeholder="Password"
										name="password"
										value={this.state.password}
										onChange={this.onChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="password"
										className="form-control-form-control-lg"
										placeholder="Confirm Password"
										name="password2"
										value={this.state.password2}
										onChange={this.onChange}
									/>
								</div>
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
