import React from 'react';
import pleaseWait from 'please-wait';

export default class LibraryApp extends React.Component {
	componentDidMount() {
		pleaseWait.instance.finish();
	}

	render() {
		return <div className="library-app">{this.props.children}</div>;
	}
}
