import deepEqual from 'lodash/isEqual';
import _uniq from 'lodash/uniq';
import React from 'react';
import PropTypes from 'prop-types';
import HoodieApi from '../services/hoodie.services.js';

import FontMediator from '../prototypo.js/mediator/FontMediator';

class FontUpdater extends React.Component {
	constructor(props) {
		super(props);

		this.fontMediatorInstance = FontMediator.instance();
	}

	shouldComponentUpdate(nextProps) {
		const subset = _uniq(this.props.subset.split('')).join('');
		const nextSubset = _uniq(nextProps.subset.split('')).join('');

		return !(
			nextProps.family === this.props.family
			&& nextProps.variant === this.props.variant
			&& nextProps.name === this.props.name
			&& nextProps.template === this.props.template
			&& nextSubset === subset
			&& nextProps.glyph === this.props.glyph
			&& deepEqual(nextProps.values, this.props.values)
		);
	}

	render() {
		const {template, name, subset, glyph, values, family, variant} = this.props;

		// Don't process if template is undefined
		if (!template) {
			console.warn('⚠️ FontUpdater: template is undefined, skipping font generation');
			return false;
		}

		const subsetCodes = _uniq(subset.split('')).map(letter =>
			letter.charCodeAt(0),
		);

		this.fontMediatorInstance.setupInfo({
			family,
			style: variant,
			template,
			email: HoodieApi.instance.email,
		});

		this.fontMediatorInstance.getFont(
			name,
			template,
			values,
			subsetCodes,
			glyph,
		);

		return false;
	}
}

FontUpdater.propTypes = {
	family: PropTypes.string,
	variant: PropTypes.string,
	name: PropTypes.string.isRequired,
	template: PropTypes.string.isRequired,
	values: PropTypes.object.isRequired,
	subset: PropTypes.string.isRequired,
	glyph: PropTypes.string.isRequired,
};

FontUpdater.defaultProps = {
	family: 'Prototypo Font',
	variant: 'Regular',
};

export default FontUpdater;
