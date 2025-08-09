import React from 'react';

import LocalClient from '../stores/local-client.stores.jsx';

import Modal from './shared/modal.components.jsx';
import InputWithLabel from './shared/input-with-label.components.jsx';
import Button from './shared/button.components.jsx';

export default class ExportAs extends React.PureComponent {
	constructor(props) {
		super(props);

		this.exportAs = this.exportAs.bind(this);
		this.exit = this.exit.bind(this);
	}

	componentDidMount() {
		this.client = LocalClient.instance();
	}

	exit() {
		this.client.dispatchAction('/set-up-export-otf', {exportAs: false});
	}

	exportAs() {
		this.client.dispatchAction('/export-otf', {
			merged: true,
			familyName: this.refs.family.inputValue,
			variantName: this.refs.variant.inputValue,
			exportAs: true,
		});

		this.exit();
	}

	render() {
		return (
			<Modal propName={this.props.propName}>
				<div className="modal-container-title account-header">
					Export font as&hellip;
				</div>
				<div className="modal-container-content">
					<div className="columns">
						<div className="half-column">
							<InputWithLabel label="Family name" ref="family" />
						</div>
						<div className="half-column">
							<InputWithLabel label="Variant name" ref="variant" />
						</div>
					</div>
					<div className="action-form-buttons">
						<Button click={this.exit} label="Cancel" neutral />
						<Button click={this.exportAs} label="Export" />
					</div>
				</div>
			</Modal>
		);
	}
}
