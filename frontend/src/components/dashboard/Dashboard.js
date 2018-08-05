import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentDevProfile } from '../../actions/devProfileActions';

class Dashboard extends Component {
	componentDidMount() {
		this.props.getCurrentDevProfile();
	}

	render() {
		return (
			<div>
				<h1>Dashboard</h1>
			</div>
		);
	}
}

export default connect(null, { getCurrentDevProfile })(Dashboard);
