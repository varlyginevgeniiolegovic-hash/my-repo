import React from 'react';

import LocalClient from '../stores/local-client.stores.jsx';

export default class DeleteParamGroup extends React.Component {
	componentDidMount() {
		this.client = LocalClient.instance();
	}

	cancelDelete() {
		this.client.dispatchAction('/pre-delete', false);
	}

	deleteGroup() {
		this.client.dispatchAction('/delete-param-group', {
			name: this.props.groupName,
		});
	}

	render() {
		const glyphs = this.props.glyphs.map(glyph => (
			<div className="delete-param-group-glyph">
				{String.fromCharCode(glyph)}
			</div>
		));

		return (
			<div className="delete-param-group">
				<p className="delete-param-group-question">
					Are you sure you want to delete the param group {this.props.groupName}
				</p>
				<p>Glyphs in this group</p>
				<div className="delete-param-group-glyphs">{glyphs}</div>
				<div className="create-param-group-form-buttons">
					<button
						className="create-param-group-form-buttons-cancel"
						onClick={() => {
							this.cancelDelete();
						}}
					>
						Cancel
					</button>
					<button
						className="create-param-group-form-buttons-submit"
						onClick={() => {
							this.deleteGroup();
						}}
					>
						Delete
					</button>
				</div>
			</div>
		);
	}
}
