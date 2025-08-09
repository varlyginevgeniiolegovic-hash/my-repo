import React from 'react';

export default class AccountApp extends React.Component {
	componentDidMount() {
		// No longer need to dismiss loading screen
		// pleaseWait handling is now done in main.js
	}

	render() {
		return <div className="account-app">{this.props.children}</div>;
	}
}
