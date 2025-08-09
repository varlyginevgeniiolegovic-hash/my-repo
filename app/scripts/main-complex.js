import 'core-js/stable';
import 'regenerator-runtime/runtime';
import pleaseWait from 'please-wait';

import React from 'react';
import ReactDOM from 'react-dom';

import _forOwn from 'lodash/forOwn';

import './styles';

import NotABrowser from './components/not-a-browser.components';
import IAmMobile from './components/i-am-mobile.components';
import App from './app';

import LocalClient from './stores/local-client.stores';
import LocalServer from './stores/local-server.stores';
import Stores from './stores/creation.stores';

import selectRenderOptions from './helpers/userAgent.helpers';
import {loadStuff} from './helpers/appSetup.helpers';
import isProduction from './helpers/is-production.helpers';

import FontMediator from './prototypo.js/mediator/FontMediator';

// Initialize loading screen with shorter timeout
try {
	pleaseWait.instance = pleaseWait.pleaseWait({
		logo: '/assets/images/prototypo-loading.svg',
		loadingHtml: 'Loading Prototypo...',
	});
} catch (error) {
	console.warn('Loading screen initialization failed:', error);
	// Create a simple loading div instead
	const loadingDiv = document.createElement('div');
	loadingDiv.id = 'simple-loading';
	loadingDiv.innerHTML = '<p>Loading Prototypo...</p>';
	loadingDiv.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:9999;';
	document.body.appendChild(loadingDiv);
	
	// Simple fallback dismiss function
	pleaseWait.instance = {
		finish: () => {
			const el = document.getElementById('simple-loading');
			if (el) el.remove();
		}
	};
}

// Fallback to dismiss loading screen after 5 seconds
setTimeout(() => {
	if (pleaseWait.instance) {
		console.log('Fallback: dismissing loading screen after timeout');
		pleaseWait.instance.finish();
	}
}, 5000);

// Import necessary actions for store functionality
import appValuesAction from './actions/appValues.actions.jsx';
import exportAction from './actions/export.actions.jsx';
import fontAction from './actions/font.actions.jsx';
import fontControlsAction from './actions/fontControls.actions.jsx';
import fontInfosAction from './actions/fontInfos.actions.jsx';
import fontParametersAction from './actions/fontParameters.actions.jsx';
import glyphsAction from './actions/glyphs.actions.jsx';
import indivAction from './actions/indiv.actions.jsx';
import panelAction from './actions/panel.actions.jsx';
import searchAction from './actions/search.actions.jsx';
import tagStoreAction from './actions/tagStore.actions.jsx';
import undoStackAction from './actions/undoStack.actions.jsx';

selectRenderOptions(
	() => {
		const content = document.getElementById('content');
		ReactDOM.render(<IAmMobile />, content);
	},
	() => {
		const content = document.getElementById('content');
		ReactDOM.render(<NotABrowser />, content);
	},
	async () => {
		// Mock Stripe for offline use
		window.Stripe = window.Stripe || { setPublishableKey: function() {} };

		const stores = Stores;
		window.prototypoStores = Stores;

		const prototypoStore = Stores['/prototypoStore'];

		const localServer = new LocalServer(stores).instance;
		LocalClient.setup(localServer);

		const actions = Object.assign(
			{},
			appValuesAction,
			exportAction,
			fontAction,
			fontControlsAction,
			fontInfosAction,
			fontParametersAction,
			glyphsAction,
			indivAction,
			panelAction,
			searchAction,
			tagStoreAction,
			undoStackAction,
		);

		localServer.on(
			'action',
			({path, params}) => {
				if (actions[path] !== undefined) {
					actions[path](params);
				}
			},
			localServer.lifespan,
		);

		const fluxEvent = new Event('fluxServer.setup');
		window.dispatchEvent(fluxEvent);

		const templates = await Promise.all(
			prototypoStore.get('templateList').map(async ({templateName}) => {
				try {
					// prettier-ignore
					const typedataJSON = await import(/* webpackChunkName: "ptfs" */ `../../dist/templates/${templateName}/font.json`);
					const glyphs = [];

					_forOwn(typedataJSON.glyphs, (glyph) => {
						if (!glyphs[glyph.unicode]) {
							glyphs[glyph.unicode] = [];
						}
						glyphs[glyph.unicode].push(glyph);
					});
					const initValues = {};

					typedataJSON.controls.forEach(group =>
						group.parameters.forEach((param) => {
							initValues[param.name] = param.init;
						}),
					);
					return {
						name: templateName,
						json: typedataJSON,
						initValues,
						glyphs,
					};
				} catch (error) {
					console.warn(`Failed to load template ${templateName}:`, error);
					return null;
				}
			}),
		);

		// Filter out failed templates  
		const validTemplates = templates.filter(template => template !== null);
		
		if (validTemplates.length > 0) {
			await FontMediator.init(validTemplates);
			const patch = prototypoStore.set('templatesData', validTemplates).commit();
			localServer.dispatchUpdate('/prototypoStore', patch);
		}

		const content = document.getElementById('content');

		// Skip authentication and go directly to the app
		if (
			location.hash.indexOf('signin') === -1
			&& location.hash.indexOf('account') === -1
			&& location.hash.indexOf('signup') === -1
		) {
			location.href = '#/library/home';
		}

		window.addEventListener('values.loaded', () => {
			ReactDOM.render(<App />, content);
			// Ensure loading screen is dismissed after app renders
			setTimeout(() => {
				if (pleaseWait.instance) {
					pleaseWait.instance.finish();
				}
			}, 500);
		});

		// Trigger the offline font loading
		try {
			await loadStuff();
			// Trigger values loaded after successful loading
			const event = new CustomEvent('values.loaded');
			window.dispatchEvent(event);
		} catch (err) {
			console.log('Offline mode - some features may be limited:', err);
			// Still trigger the event even if loading fails
			const event = new CustomEvent('values.loaded');
			window.dispatchEvent(event);
			
			const fontInstanceLoaded = new Event('fontInstance.loaded');
			window.dispatchEvent(fontInstanceLoaded);
		}
	},
);