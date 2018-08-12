import React from 'react';
import spinner from './flying-spinner.gif';

export default () => {
	return (
		<div>
			<img src={spinner} style={{ width: '200px', margin: 'auto', display: 'block' }} alt="Loading..." />
		</div>
	);
};
