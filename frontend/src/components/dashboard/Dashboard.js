import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentDev } from '../../actions/devActions';

class Dashboard extends Component {
	componentDidMount() {
		this.props.getCurrentDev();
	}

	render() {
		const { client } = this.props.auth;
		const { dev, loading } = this.props.dev;

		let dashboardContent;

		if (dev === null || loading) {
			dashboardContent = <h4>Loading...</h4>;
		} else {
			dashboardContent = <h1>Grrr...</h1>;
		}

		return (
			<div className="dashboard">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h1 className="display-4">Dashboard</h1>
							{dashboardContent}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Dashboard.propTypes = {
	getCurrentDev: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	dev: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	dev: state.dev,
	auth: state.auth
});

export default connect(null, { getCurrentDev })(Dashboard);
