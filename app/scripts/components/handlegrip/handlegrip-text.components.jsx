import _find from 'lodash/find';
import React from 'react';
import ReactDOM from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Lifespan from 'lifespan';
import {diffChars} from 'diff';

import LocalClient from '../../stores/local-client.stores';
import DOM from '../../helpers/dom.helpers';

import HandlegripLetter from './handlegrip-letter.components';
import RegularLetter from './regular-letter.components';

/**
 *	Component : Text in prototypo-word
 *	Where you can set spacing on a specific letter
 *	@extends React.Component
 */
export default class HandlegripText extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			trackingX: 0,
			letterFontSize: 0,
			tracking: false,
			fontValues: null,
			textArray: [],
			lastKey: 0,
		};
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(
			this,
		);

		// function bindings
		this.handleUp = this.handleUp.bind(this);
		this.handleMove = this.handleMove.bind(this);
		this.handleSelectstart = this.handleSelectstart.bind(this);
		this.updateCacheTextArray = this.updateCacheTextArray.bind(this);
		this.selectLetter = this.selectLetter.bind(this);
	}

	componentDidMount() {
		this.client = LocalClient.instance();
		this.lifespan = new Lifespan();

		this.client
			.getStore('/prototypoStore', this.lifespan)
			.onUpdate((head) => {
				this.setState({
					tracking: head.toJS().d.uiSpacingTracking,
					letterFontSize:
						head.toJS().d.uiLetterSpacingLetterFontSize
						|| this.state.letterFontSize,
				});
			})
			.onDelete(() => {
				this.setState(undefined);
			});

		this.client
			.getStore('/undoableStore', this.lifespan)
			.onUpdate((head) => {
				this.setState({
					fontValues: head.toJS().d.controlsValues,
				});
			})
			.onDelete(() => {
				this.setState(undefined);
			});

		this.client
			.getStore('/fontInstanceStore', this.lifespan)
			.onUpdate(() => {
				this.setState({
					font: window.fontResult,
				});
			})
			.onDelete(() => {
				this.setState(undefined);
			});

		this.client
			.getStore('/fastStuffStore', this.lifespan)
			.onUpdate((head) => {
				this.setState({
					trackingX: head.toJS().d.uiTrackingX,
					unClampedOldValue: head.toJS().d.unClampedOldValue,
					clampedValue: head.toJS().d.clampedValue,
					dragginRatio: head.toJS().d.dragginRatio,
				});
			})
			.onDelete(() => {
				this.setState(undefined);
			});

		// make sure there is no selection while dragging
		document.addEventListener('selectstart', this.handleSelectstart);

		this.updateCacheTextArray(this.props.text);
	}

	componentDidUpdate() {
		if (!this.state.loaded) {
			const handlegripDOM = this.node;

			if (handlegripDOM) {
				handlegripDOM.addEventListener('mouseup', this.handleUp);
				handlegripDOM.addEventListener('mousemove', this.handleMove);
				this.setState({
					loaded: true,
				});
			}
		}
	}

	componentWillUnmount() {
		const handlegripDOM = this.node;

		this.lifespan.release();
		document.removeEventListener('selectstart', this.handleSelectstart);

		if (handlegripDOM) {
			handlegripDOM.removeEventListener('mouseup', this.handleUp);
			handlegripDOM.removeEventListener('mousemove', this.handleMove);
		}
	}

	openGlyph(code) {
		this.client.dispatchAction('/select-glyph', {unicode: code});
	}

	handleUp(e) {
		if (!this.state.tracking) {
			return;
		}

		this.client.dispatchAction('/change-letter-spacing', {
			value: this.state.clampedValue,
			side: this.state.tracking,
			letter: this.getSelectedLetter(),
			label: 'spacing',
			force: true,
		});

		const letterOffsetWidth = this.selectedLetter.getClientWidth();
		const glyph = _find(
			this.state.font.glyphs,
			glyphItem =>
				glyphItem.unicode === this.getSelectedLetter().charCodeAt(0),
		);
		const {advanceWidth} = glyph;
		const dragginRatio = parseFloat(advanceWidth) / letterOffsetWidth;

		this.client.dispatchAction('/store-value-fast', {
			unClampedOldValue: undefined,
			clampedValue: undefined,
			dragginRatio,
		});
		this.client.dispatchAction('/store-value', {uiSpacingTracking: undefined});

		e.stopPropagation();
	}

	handleMove(e) {
		if (!this.state.tracking) {
			return;
		}

		// if this expression is true, the user might have left the draggin zone while dragging
		// and might be trying to come back without the mouse being down
		// in that case we cancel operations because it might lead to an unclear state of dragging
		// event.button and event.buttons work differently but both false means no button pressed
		if (!e.button && !e.buttons) {
			return;
		}

		const leftSideTracking = this.state.tracking === 'left';
		const newX = e.pageX || e.screenX;
		const {trackingX} = this.state;
		const el = this.node;
		const {offsetLeft} = DOM.getAbsOffset(el);
		const letterOffsetWidth = this.selectedLetter.getClientWidth();
		let clampedNewValue;

		// advanceWidth is in typographic unit
		const glyph = _find(
			this.state.font.glyphs,
			glyphItem =>
				glyphItem.unicode === this.getSelectedLetter().charCodeAt(0),
		);
		const {
			advanceWidth,
			spacingLeft,
			spacingRight,
			baseSpacingLeft,
			baseSpacingRight,
		} = glyph;
		// intiate spacing value that will be set w/ dispatchAction
		const newSpacingValues = {};

		// here we are going to find out the pixel ratio for dragging
		const dragginRatio = parseFloat(advanceWidth) / letterOffsetWidth;

		// property to edit
		const property = leftSideTracking ? 'spacingLeft' : 'spacingRight';
		// current letter's unicode
		const unicode = this.getSelectedLetter().charCodeAt(0);
		// store the special property object for the current unicode value
		const specialPropsObject = this.state.fontValues.glyphSpecialProps
			? this.state.fontValues.glyphSpecialProps[unicode]
			: {};

		// obtain variation value
		const variation
			= Math.round((newX - trackingX) * dragginRatio)
			* (leftSideTracking ? -1 : 1);

		// compute new value
		const newValue
			= (this.state.unClampedOldValue !== undefined
				? this.state.unClampedOldValue
				: specialPropsObject && specialPropsObject[property]
					? specialPropsObject[property]
					: 0) + variation;

		const glyphWidth
			= glyph.advanceWidth - glyph.spacingLeft - glyph.spacingRight;

		// if the new X value is in the element boundaries
		if (newX >= offsetLeft && newX <= offsetLeft + el.clientWidth) {
			const otherSpacing = leftSideTracking ? spacingRight : spacingLeft;

			clampedNewValue = Math.min(
				Math.max(newValue, -glyphWidth - otherSpacing + 100),
				this.props.max,
			);
		}
		else {
			clampedNewValue = newX < offsetLeft ? this.props.min : this.props.max;
		}

		// if we are currently tracking left side spacing
		if (leftSideTracking) {
			// set the new spacing value
			newSpacingValues.spacingLeft = clampedNewValue + baseSpacingLeft;
		}
		else {
			newSpacingValues.spacingRight = clampedNewValue + baseSpacingRight;
		}

		newSpacingValues.unClampedOldValue = newValue;
		newSpacingValues.clampedValue = clampedNewValue;
		newSpacingValues.dragginRatio = dragginRatio;
		newSpacingValues.uiTrackingX = newX;

		this.client.dispatchAction('/store-value-fast', newSpacingValues);
	}

	/**
	 *	returns the letter to select (text at the right index)
	 *	@return {string} the letter
	 */
	getSelectedLetter() {
		return (this.state.textArray.find(
			([key]) => key === this.props.selectedLetter,
		) || [undefined, ''])[1];
	}

	handleSelectstart(e) {
		// warning : this does not seem to work on "input" tags
		if (this.state.tracking) {
			return e.preventDefault();
		}
	}

	componentDidUpdate(prevProps) {
		if (this.props.text !== prevProps.text) {
			this.updateCacheTextArray(this.props.text);
		}
	}

	updateCacheTextArray(newText) {
		let {textArray, lastKey} = this.state;
		let currentIndex = 0;

		diffChars(
			textArray.map(keyValue => keyValue[1]).join(''),
			newText,
		).forEach(({added, removed, count, value}) => {
			if (removed) {
				textArray = count
					? [
						...textArray.slice(0, currentIndex),
						...textArray.slice(currentIndex + count),
					]
					: []; // if count is undefined, it means text is empty
				return;
			}

			if (added) {
				textArray = [
					...textArray.slice(0, currentIndex),
					...value.split('').map((letter) => {
						lastKey++;
						return [`${lastKey}`, letter];
					}),
					...textArray.slice(currentIndex),
				];
			}

			currentIndex += count;
		});

		this.setState({textArray, lastKey});
	}

	selectLetter(letter, index) {
		this.client.dispatchAction('/store-value', {uiWordSelection: index});
	}

	render() {
		if (this.state.font) {
			const selectedLetter = this.props.selectedLetter;
			const glyph = _find(
				this.state.font.glyphs,
				glyphItem =>
					glyphItem.unicode === this.getSelectedLetter().charCodeAt(0),
			);
			const spacingLeft = (glyph || {}).spacingLeft;
			const spacingRight = (glyph || {}).spacingRight;
			const advanceWidth = (glyph || {}).advanceWidth;

			const letterComponents = this.state.textArray.map(([key, letter]) => {
				if (selectedLetter === key) {
					return (
						<HandlegripLetter
							letter={letter}
							ref={node => (this.selectedLetter = node)}
							openGlyph={() => {
								this.openGlyph(letter.charCodeAt(0));
							}}
							spacingLeft={spacingLeft}
							spacingRight={spacingRight}
							baseSpacingLeft={glyph.baseSpacingLeft}
							baseSpacingRight={glyph.baseSpacingRight}
							advanceWidth={advanceWidth}
							clampedValue={this.state.clampedValue}
							dragginRatio={this.state.dragginRatio}
							tracking={this.state.tracking}
							min={this.props.min}
							max={this.props.max}
							key={key}
						/>
					);
				}

				return (
					<RegularLetter
						letter={letter}
						identifier={key}
						key={key}
						onSelect={this.selectLetter}
					/>
				);
			});

			return (
				<div
					className={this.props.className}
					spellCheck="false"
					ref={node => (this.node = node)}
					style={this.props.style}
				>
					{letterComponents}
				</div>
			);
		}

		return false;
	}
}
