import React from 'react';

import LocalClient from '../stores/local-client.stores.jsx';

export default class EditParamGroupPanel extends React.Component {
	componentDidMount() {
		this.client = LocalClient.instance();
	}

	toggleGlyphs(e) {
		e.preventDefault();
		this.client.dispatchAction('/toggle-glyph-param-grid');
	}

	removeGlyph(glyph) {
		this.client.dispatchAction('/remove-glyph', {glyph});
	}

	saveGroup() {
		this.client.dispatchAction('/save-param-group', {
			name: this.refs.name.value,
		});
	}

	render() {
		const glyphs = this.props.glyphs.map(glyph => (
			<div
				key={glyph}
				onClick={() => {
					this.removeGlyph(glyph);
				}}
				className="edit-param-group-panel-glyph"
			>
				{String.fromCharCode(glyph)}
			</div>
		));

		const error = this.props.errorEdit ? (
			<div className="create-param-group-panel-error">
				<span className="create-param-group-panel-error-message">
					{this.props.errorEdit}
				</span>
			</div>
		) : (
			false
		);

		return (
			<div className="edit-param-group-panel">
				Editing group
				<input
					type="text"
					ref="name"
					className="edit-param-group-panel-input"
					defaultValue={this.props.groupName}
				/>
				<p>Glyphs in this group</p>
				<div className="delete-param-group-glyphs">{glyphs}</div>
				<button
					className="create-param-group-form-add-glyph"
					onClick={(e) => {
						this.toggleGlyphs(e);
					}}
				>
					Add multiple glyph to this group
				</button>
				{error}
				<div className="create-param-group-form-buttons">
					<button
						className="create-param-group-form-buttons-cancel"
						onClick={() => {
							this.client.dispatchAction('/edit-param-group', false);
						}}
					>
						Cancel
					</button>
					<button
						className="create-param-group-form-buttons-submit"
						onClick={() => {
							this.saveGroup();
						}}
					>
						Save
					</button>
				</div>
			</div>
		);
	}
}
