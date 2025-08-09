import React from 'react';
import Lifespan from 'lifespan';
import ScrollArea from 'react-scrollbar/dist/no-css';
import classNames from 'classnames';

import LocalClient from '../stores/local-client.stores.jsx';

export default class GlyphGrid extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			glyphs: {},
		};
	}

	componentDidMount() {
		this.client = LocalClient.instance();
		this.lifespan = new Lifespan();

		this.client
			.getStore('/prototypoStore', this.lifespan)
			.onUpdate((head) => {
				this.setState({
					glyphs: head.toJS().d.glyphs,
				});
			})
			.onDelete(() => {
				this.setState(undefined);
			});
	}

	componentWillUnmount() {
		this.lifespan.release();
	}

	selectTag(e) {
		if (e && e.target && e.target.value !== undefined) {
			this.client.dispatchAction('/select-indiv-tag', e.target.value);
		}
	}

	selectGlyph(unicode, isSelected, isInOtherGroup) {
		if (!isInOtherGroup) {
			this.props.select(unicode, isSelected);
		}
	}

	render() {
		// Handle case where glyphs might be empty or undefined
		if (!this.state.glyphs || Object.keys(this.state.glyphs).length === 0) {
			return (
				<div className="glyphs-grid">
					<div className="glyphs-grid-header">
						<div className="glyphs-grid-header-title">Add glyphs</div>
						<div className="glyphs-grid-filter">Loading glyphs...</div>
					</div>
				</div>
			);
		}

		const glyphs = Object.keys(this.state.glyphs).map((unicode) => {
			const glyph = this.state.glyphs[unicode];

			// Handle case where glyph or tags might be undefined
			if (!glyph || !glyph[0] || !glyph[0].tags) {
				return false;
			}

			// Filter by selected tag (show all if no tag selected or tag is 'all')
			const tagSelected = this.props.tagSelected || 'all';
			if (tagSelected !== 'all' && glyph[0].tags.indexOf(tagSelected) === -1) {
				return false;
			}

			const isSelected
				= this.props.selected && this.props.selected.indexOf(unicode) !== -1;
			const forbidden
				= this.props.forbidden && this.props.forbidden.indexOf(unicode) !== -1;

			const classes = classNames({
				'glyphs-grid-glyph': true,
				'is-active': isSelected,
				'is-disabled': forbidden,
			});

			return (
				<div
					className={classes}
					key={unicode}
					onClick={() => {
						this.selectGlyph(unicode, isSelected, forbidden);
					}}
				>
					{String.fromCharCode(unicode)}
				</div>
			);
		});

		// Get tags from props or derive from glyphs
		let availableTags = this.props.tags;
		if (!availableTags) {
			// Derive tags from glyphs if not provided as props
			const tagSet = new Set(['all']); // Always include 'all' option
			Object.keys(this.state.glyphs).forEach((unicode) => {
				const glyph = this.state.glyphs[unicode];
				if (glyph && glyph[0] && glyph[0].tags) {
					glyph[0].tags.forEach(tag => tagSet.add(tag));
				}
			});
			availableTags = Array.from(tagSet);
		}

		const tags = availableTags.map(tag => (
			<option value={tag} key={tag}>
				{tag}
			</option>
		));

		return (
			<div className="glyphs-grid">
				<div className="glyphs-grid-header">
					<div className="glyphs-grid-header-title">Add glyphs</div>
					<div className="glyphs-grid-filter">
						Filter by:
						<select
							className="glyphs-grid-filter-select"
							onChange={(e) => {
								this.selectTag(e);
							}}
						>
							{tags}
						</select>
					</div>
				</div>
				<div className="glyphs-grid-scroll-container">
					<ScrollArea horizontal={false}>
						<div className="glyphs-grid-scroll-content">{glyphs}</div>
					</ScrollArea>
				</div>
			</div>
		);
	}
}
