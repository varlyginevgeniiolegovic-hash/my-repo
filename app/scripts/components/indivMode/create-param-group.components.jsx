import React from 'react';
import Lifespan from 'lifespan';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ScrollArea from 'react-scrollbar/dist/no-css';

import LocalClient from '../../stores/local-client.stores.jsx';

import InputWithLabel from '../shared/input-with-label.components.jsx';
import Button from '../shared/button.components.jsx';
import CloseButton from '../close-button.components.jsx';
import GlyphGrid from '../glyph-grid.components.jsx';
import {indivGroupsCreationTutorialLabel} from '../../helpers/joyride.helpers.js';

export default class CreateParamGroup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: [],
			groups: [],
			tags: [],
		};

		// We bind member methods in the constructor to avoid
		// triggering render on children pure render component
		this.close = this.close.bind(this);
		this.createGroup = this.createGroup.bind(this);
		this.selectGlyph = this.selectGlyph.bind(this);
		this.prepareDeleteOrDelete = this.prepareDeleteOrDelete.bind(this);
		this.cancelDelete = this.cancelDelete.bind(this);
		this.openGroup = this.openGroup.bind(this);

		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(
			this,
		);
	}

	componentDidMount() {
		this.client = LocalClient.instance();
		this.lifespan = new Lifespan();

		this.client
			.getStore('/prototypoStore', this.lifespan)
			.onUpdate((head) => {
				this.setState({
					tags: head.toJS().d.tags,
					selected: head.toJS().d.indivSelected,
					tagSelected: head.toJS().d.indivTagSelected,
					errorMessage: head.toJS().d.indivErrorMessage,
					errorGlyphs: head.toJS().d.indivErrorGlyphs,
					groups: head.toJS().d.indivGroups,
					forbiddenGlyphs: head.toJS().d.indivOtherGroups,
					glyphGroupDeleteSplit: head.toJS().d.uiGlyphGroupDeleteSplit,
				});
			})
			.onDelete(() => {
				this.setState(undefined);
			});
	}

	componentDidMount() {
		setTimeout(() => {
			this.client.dispatchAction('/store-value', {
				uiJoyrideTutorialValue: indivGroupsCreationTutorialLabel,
			});
		}, this.props.transitionTimeout + 100);
	}

	componentWillUnmount() {
		this.lifespan.release();
	}

	createGroup(e) {
		e.preventDefault();

		if (this.props.editMode) {
			this.client.dispatchAction('/save-param-group', {
				newName: this.refs.groupname.inputValue,
			});
		}
		else {
			this.client.dispatchAction('/create-param-group', {
				name: this.refs.groupname.inputValue,
				selected: this.state.selected,
			});
		}
	}

	close(e) {
		e.preventDefault();
		this.client.dispatchAction('/store-value', {
			indivCreate: false,
			indivEdit: false,
			indivCurrentGroup: undefined,
			indivSelected: [],
			indivErrorMessage: [],
			indivErrorGlyphs: [],
		});
	}

	openGroup() {
		this.client.dispatchAction('/store-value', {
			indivEdit: false,
			indivEditingParams: true,
			indivSelected: [],
			indivErrorMessage: [],
			indivErrorGlyphs: [],
		});
	}

	selectGlyph(unicode, isSelected) {
		if (this.props.editMode) {
			this.client.dispatchAction('/add-glyph-to-indiv-edit', {
				unicode,
				isSelected,
			});
		}
		else {
			this.client.dispatchAction('/add-glyph-to-indiv-create', {
				unicode,
				isSelected,
			});
		}
	}

	prepareDeleteOrDelete() {
		if (this.state.glyphGroupDeleteSplit) {
			this.client.dispatchAction('/delete-param-group', this.props.group);
			this.client.dispatchAction('/store-value', {
				uiGlyphGroupDeleteSplit: false,
			});
		}
		else {
			this.client.dispatchAction('/store-value', {
				uiGlyphGroupDeleteSplit: true,
			});
		}
	}

	cancelDelete() {
		this.client.dispatchAction('/store-value', {
			uiGlyphGroupDeleteSplit: false,
		});
	}

	render() {
		const error = this.state.errorMessage ? (
			<div className="add-family-form-error">{this.state.errorMessage}</div>
		) : (
			false
		);

		const buttons = this.props.editMode ? (
			[
				<Button
					key="open"
					label="Open in prototypo"
					neutral
					click={this.openGroup}
				/>,
				<Button
					key="save"
					label="Save change"
					neutral
					click={this.createGroup}
				/>,
				<Button
					key="delete"
					label={this.state.glyphGroupDeleteSplit ? 'Delete' : 'Delete group'}
					altLabel="Cancel"
					danger
					splitButton
					splitted={this.state.glyphGroupDeleteSplit}
					click={this.prepareDeleteOrDelete}
					altClick={this.cancelDelete}
				/>,
			]
		) : (
			<Button label="Save change" neutral click={this.createGroup} />
		);

		return (
			<div className="create-param-group">
				<form className="create-param-group-form" onSubmit={this.createGroup}>
					<div className="create-param-group-form-close">
						<CloseButton click={this.close} />
					</div>
					<ScrollArea horizontal={false}>
						<div className="create-param-group-form-scroll">
							<InputWithLabel
								ref="groupname"
								label="Group name"
								inputValue={this.props.group ? this.props.group.name : ''}
							/>
							<GlyphGrid
								forbidden={this.state.forbiddenGlyphs}
								select={this.selectGlyph}
								tagSelected={this.state.tagSelected}
								selected={
									this.props.group
										? this.props.group.glyphs
										: this.state.selected
								}
								tags={this.state.tags}
							/>
							{error}
							{buttons}
						</div>
					</ScrollArea>
				</form>
			</div>
		);
	}
}
