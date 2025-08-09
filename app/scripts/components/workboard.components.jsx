import React from 'react';
import Lifespan from 'lifespan';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import LocalClient from '../stores/local-client.stores.jsx';

import GlyphPanel from './glyph-panel.components.jsx';
import PrototypoPanel from './prototypo-panel.components.jsx';
import FontControls from './font-controls.components.jsx';
import LoadingOverlay from './shared/loading-overlay.components.jsx';
import IndivSidebar from './indivMode/indiv-sidebar.components.jsx';

export default class Workboard extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		this.lifespan = new Lifespan();
		this.client = LocalClient.instance();

		const prototypoStore = this.client.fetch('/prototypoStore');

		this.setState({
			fontName: prototypoStore.get('fontName'),
			glyphs: prototypoStore.get('fontGlyphs'),
		});

		this.client
			.getStore('/prototypoStore', this.lifespan)
			.onUpdate((head) => {
				this.setState({
					fontName: head.toJS().d.fontName,
					glyphs: head.toJS().d.fontGlyphs,
					fontLoading: head.toJS().d.uiFontLoading,
					indivMode: head.toJS().d.indivMode,
					indivEditingParams: head.toJS().d.indivEditingParams,
				});
			})
			.onDelete(() => {
				this.setState(undefined);
			});
	}

	componentWillUnmount() {
		this.lifespan.release();
	}

	render() {
		if (process.env.__SHOW_RENDER__) {
			console.log('[RENDER] Workboard');
		}

		const loadingOverlay = this.state.fontLoading ? <LoadingOverlay /> : false;

		let sideBar = false;

		if (this.state.indivMode && !this.state.indivEditingParams) {
			sideBar = <IndivSidebar />;
		}
		else {
			sideBar = <FontControls />;
		}

		return (
			<div id="workboard">
				<ReactCSSTransitionGroup
					transitionName="loading-overlay"
					transitionEnterTimeout={300}
					transitionLeaveTimeout={300}
				>
					{loadingOverlay}
				</ReactCSSTransitionGroup>
				{sideBar}
				<PrototypoPanel
					fontName={this.state.fontName}
					glyphs={this.state.glyphs}
				/>
				<GlyphPanel />
			</div>
		);
	}
}
