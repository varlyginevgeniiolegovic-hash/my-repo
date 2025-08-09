import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import _forOwn from 'lodash/forOwn';
import pleaseWait from 'please-wait';

import './styles';

import App from './app';
import LocalClient from './stores/local-client.stores';
import LocalServer from './stores/local-server.stores';
import Stores from './stores/creation.stores';
import selectRenderOptions from './helpers/userAgent.helpers';
import {loadStuff} from './helpers/appSetup.helpers';
import {initializeTemplatesFromFolder} from './helpers/templateLoader.helpers';
import {addDebugUtilities} from './helpers/fontExportDebugger.helpers';
import FontMediator from './prototypo.js/mediator/FontMediator';

// Mock pleaseWait to prevent component errors
pleaseWait.instance = {
	finish: () => {
		// No-op for offline mode
		console.log('pleaseWait.finish() called (mocked)');
	}
};

// Mock HoodieApi for offline mode
import HoodieApi from './services/hoodie.services';
HoodieApi.isLoggedIn = () => true;
HoodieApi.instance = { email: 'offline@prototypo.local' };

// Mock Intercom for offline mode
window.Intercom = function() { 
	console.log('Intercom call (mocked):', arguments); 
};

// Mock Apollo/GraphQL client for offline mode
import apolloClient from './services/graphcool.services';

// Create a robust mock query result that always returns consistent data
function createMockQueryResult() {
	const currentLibrary = getOfflineLibrary();
	return { 
		data: { 
			user: { 
				library: currentLibrary, 
				id: 'offline-user',
				email: 'offline@prototypo.local'
			} 
		}, 
		loading: false, 
		error: null 
	};
}

// Create a complete mock Apollo client that handles all methods properly
const mockObservableQuery = {
	subscribe: () => ({ unsubscribe: () => {} }),
	setOptions: () => mockObservableQuery,
	setVariables: () => mockObservableQuery,
	updateQuery: () => mockObservableQuery,
	refetch: () => {
		// Always get fresh offline library data for refetch
		const currentLibrary = getOfflineLibrary();
		console.log('Mock refetch called, returning', currentLibrary.length, 'fonts');
		return Promise.resolve(createMockQueryResult());
	},
	startPolling: () => {},
	stopPolling: () => {},
	currentResult: () => createMockQueryResult(),
	result: () => createMockQueryResult(),
	// Ensure all promise-like methods are available
	catch: (callback) => {
		console.log('Mock .catch() called - Apollo error handling');
		return Promise.resolve(mockObservableQuery);
	},
	then: (callback) => {
		console.log('Mock .then() called');
		const result = createMockQueryResult();
		if (callback) callback(result);
		return Promise.resolve(result);
	},
	finally: (callback) => {
		if (callback) callback();
		return Promise.resolve(mockObservableQuery);
	}
};

// Store offline created families in localStorage for persistence
function getOfflineLibrary() {
	try {
		const stored = localStorage.getItem('prototypo_offline_library');
		return stored ? JSON.parse(stored) : [];
	} catch (error) {
		console.log('Error reading offline library:', error);
		return [];
	}
}

function saveOfflineLibrary(library) {
	try {
		localStorage.setItem('prototypo_offline_library', JSON.stringify(library));
		console.log('Offline library saved:', library.length, 'fonts');
	} catch (error) {
		console.error('Error saving offline library:', error);
	}
}

let offlineLibrary = getOfflineLibrary();

// Debug utility - expose offline library for debugging
window.debugOfflineLibrary = function() {
	const current = getOfflineLibrary();
	console.log('Current offline library:', current);
	console.log('Total fonts:', current.length);
	current.forEach((font, index) => {
		console.log(`${index + 1}. ${font.name} (ID: ${font.id})`);
	});
	return current;
};

// Debug utility to test navigation
window.testNavigation = function() {
	console.log('Testing navigation to library...');
	window.location.hash = '#/library/home?refetch=true';
	console.log('Navigation initiated - check if page changes');
};

// Debug utility to check slider functionality
window.debugSliders = function() {
	const LocalClient = require('./stores/local-client.stores').default;
	const client = LocalClient.instance();
	
	console.log('=== SLIDER DEBUG INFO ===');
	
	// Check if LocalClient is working
	console.log('LocalClient available:', !!client);
	
	// Check stores
	try {
		const prototypoStore = client.getStore('/prototypoStore');
		const undoableStore = client.getStore('/undoableStore');
		
		console.log('PrototypoStore available:', !!prototypoStore);
		console.log('UndoableStore available:', !!undoableStore);
		
		if (undoableStore) {
			const undoableHead = undoableStore.head;
			if (undoableHead) {
				const controlsValues = undoableHead.toJS().d.controlsValues;
				console.log('ControlsValues available:', !!controlsValues);
				if (controlsValues) {
					console.log('Number of control parameters:', Object.keys(controlsValues).length);
					console.log('Control parameters:', Object.keys(controlsValues));
				}
			}
		}
		
		if (prototypoStore) {
			const protoHead = prototypoStore.head;
			if (protoHead) {
				const protoData = protoHead.toJS().d;
				console.log('Font parameters available:', !!protoData.fontParameters);
				if (protoData.fontParameters) {
					console.log('Number of parameter groups:', protoData.fontParameters.length);
					const totalParams = protoData.fontParameters.reduce((total, group) => total + group.parameters.length, 0);
					console.log('Total parameters in groups:', totalParams);
				}
			}
		}
		
	} catch (error) {
		console.error('Error checking stores:', error);
	}
	
	console.log('=== END SLIDER DEBUG ===');
};

const mockApolloClient = {
	query: (options) => {
		// Always get fresh offline library data
		offlineLibrary = getOfflineLibrary();
		
		// Extract selections for query analysis
		let selections = [];
		if (options && options.query && options.query.definitions && 
		    options.query.definitions[0] && options.query.definitions[0].selectionSet) {
			selections = options.query.definitions[0].selectionSet.selections;
		}
		
		// Handle library query to return offline families
		const isLibraryQuery = selections.some(sel => 
			sel.name && sel.name.value === 'user' && 
			sel.selectionSet && sel.selectionSet.selections.some(subSel => 
				subSel.name && subSel.name.value === 'library'
			)
		);
		
		if (isLibraryQuery) {
			console.log('Library query returning', offlineLibrary.length, 'offline fonts');
			return Promise.resolve({ 
				data: { 
					user: { 
						library: offlineLibrary,
						id: 'offline-user',
						email: 'offline@prototypo.local',
						libraryMeta: { count: offlineLibrary.length }
					} 
				}, 
				loading: false, 
				error: null 
			});
		}
		
		// Handle getBaseValues query for add variant functionality
		const isGetBaseValuesQueryFamily = selections.some(sel => 
			sel.name && sel.name.value === 'family' && 
			sel.selectionSet && sel.selectionSet.selections.some(subSel => 
				subSel.name && subSel.name.value === 'variants'
			)
		);
		
		if (isGetBaseValuesQueryFamily) {
			console.log('getBaseValues query (family) - providing fallback family data');
			return Promise.resolve({
				data: {
					family: {
						id: options.variables ? options.variables.familyId : 'fallback-family-id',
						variants: [{
							id: 'fallback-variant-id',
							values: {} // Empty values as base
						}]
					}
				},
				loading: false,
				error: null
			});
		}
		
		// Handle getBaseValues query for duplicate variant functionality
		const isGetBaseValuesQueryVariant = selections.some(sel => 
			sel.name && sel.name.value === 'variant' && 
			sel.selectionSet && sel.selectionSet.selections.some(subSel => 
				subSel.name && subSel.name.value === 'values'
			)
		);
		
		if (isGetBaseValuesQueryVariant) {
			console.log('getBaseValues query (variant) - providing fallback variant data');
			return Promise.resolve({
				data: {
					variant: {
						id: options.variables ? options.variables.variantBaseId : 'fallback-variant-id',
						name: 'Regular',
						family: {
							id: 'fallback-family-id'
						},
						values: {} // Empty values as base
					}
				},
				loading: false,
				error: null
			});
		}
		
		// Default query response
		return Promise.resolve({ 
			data: { 
				user: { 
					library: offlineLibrary, 
					id: 'offline-user',
					email: 'offline@prototypo.local',
					libraryMeta: { count: offlineLibrary.length }
				} 
			}, 
			loading: false, 
			error: null 
		});
	},
	mutate: (options) => {
		// Handle createFamily mutation specially
		if (options && options.mutation && options.mutation.definitions && 
		    options.mutation.definitions[0] && options.mutation.definitions[0].name && 
		    options.mutation.definitions[0].name.value === 'createFamily') {
			const variables = options.variables || {};
			const newFamily = {
				id: 'offline-family-' + Date.now(),
				name: variables.name || 'Offline Font',
				template: variables.template || 'venus.ptf',
				tags: [],
				designer: '',
				designerUrl: '',
				foundry: 'Prototypo',
				foundryUrl: 'https://prototypo.io/',
				variants: [{
					id: 'offline-variant-' + Date.now(),
					name: 'Regular',
					values: variables.values || {
						thickness: 80,
						slant: 0,
						width: 100,
						optical: 10
					},
					width: 'normal',
					weight: 400,
					italic: false,
					updatedAt: new Date().toISOString()
				}]
			};
			
			// Add to offline library
			offlineLibrary.push(newFamily);
			saveOfflineLibrary(offlineLibrary);
			console.log('Added font to offline library. Total fonts:', offlineLibrary.length);
			
			return Promise.resolve({
				data: {
					createFamily: newFamily
				},
				loading: false,
				error: null
			});
		}
		
		// Default response for other mutations
		return Promise.resolve({ 
			data: { 
				user: { 
					library: [], 
					id: 'offline-user',
					email: 'offline@prototypo.local'
				} 
			}, 
			loading: false, 
			error: null 
		});
	},
	watchQuery: () => {
		console.log('Mock watchQuery called');
		return {
			...mockObservableQuery,
			// Ensure all Apollo query methods return safe objects
			catch: (callback) => {
				console.log('WatchQuery .catch() called - Apollo error handling');
				return Promise.resolve(mockObservableQuery);
			},
			then: (callback) => {
				const result = createMockQueryResult();
				if (callback) callback(result);
				return Promise.resolve(result);
			}
		};
	},
	resetStore: () => Promise.resolve(),
	// Add QueryRecycler methods
	queryRecycler: {
		recycle: () => {},
		reuse: () => mockObservableQuery
	},
	// Add cache methods
	cache: {
		reset: () => {},
		extract: () => ({}),
		restore: () => {}
	}
};

// Replace Apollo client methods
Object.assign(apolloClient, mockApolloClient);

// Also patch the Apollo client prototype to catch any missed method calls
const originalWatchQuery = apolloClient.watchQuery;
apolloClient.watchQuery = function() {
	console.log('Patched watchQuery called');
	const result = {
		...mockObservableQuery,
		catch: (callback) => {
			console.log('Patched watchQuery .catch() called - Apollo error handling');
			return Promise.resolve(mockObservableQuery);
		},
		then: (callback) => {
			const result = createMockQueryResult();
			if (callback) callback(result);
			return Promise.resolve(result);
		}
	};
	return result;
};

// Patch all methods to ensure they return Promise-like objects
['query', 'mutate', 'watchQuery'].forEach(method => {
	const original = apolloClient[method];
	apolloClient[method] = function() {
		const result = original ? original.apply(this, arguments) : mockObservableQuery;
		
		// Ensure the result always has all necessary Promise-like methods
		if (result && typeof result === 'object') {
			if (typeof result.catch !== 'function') {
				result.catch = (callback) => {
					console.log(`Globally caught Apollo ${method} .catch() error - preventing crash`);
					return Promise.resolve(mockObservableQuery);
				};
			}
			if (typeof result.then !== 'function') {
				result.then = (callback) => {
					const mockResult = createMockQueryResult();
					if (callback) callback(mockResult);
					return Promise.resolve(mockResult);
				};
			}
			if (typeof result.finally !== 'function') {
				result.finally = (callback) => {
					if (callback) callback();
					return Promise.resolve(mockObservableQuery);
				};
			}
		}
		
		return result;
	};
});

// Patch React.Component to intercept Apollo GraphQL components
const originalComponentDidMount = React.Component.prototype.componentDidMount;
const originalComponentDidUpdate = React.Component.prototype.componentDidUpdate;

// Override componentDidUpdate to prevent Apollo updateQuery errors
React.Component.prototype.componentDidUpdate = function(prevProps, prevState, snapshot) {
	try {
		if (originalComponentDidUpdate) {
			originalComponentDidUpdate.call(this, prevProps, prevState, snapshot);
		}
	} catch (error) {
		// Silently catch Apollo updateQuery errors
		if (error.message && (error.message.includes("Cannot read properties of undefined (reading 'catch')") || error.message.includes("reading 'catch'"))) {
			console.log('Caught and suppressed Apollo updateQuery error');
			return;
		}
		throw error;
	}
};

// Add global error handlers to catch Apollo errors that slip through
window.addEventListener('error', function(event) {
	if (event.error && event.error.message) {
		if (event.error.message.includes("Cannot read properties of undefined (reading 'catch')") ||
		    event.error.message.includes("reading 'catch'")) {
			console.log('Globally caught Apollo .catch() error - preventing crash');
			event.preventDefault();
			event.stopPropagation();
			return false;
		}
	}
});

// Also catch unhandled promise rejections
window.addEventListener('unhandledrejection', function(event) {
	if (event.reason && event.reason.message) {
		if (event.reason.message.includes('catch') || event.reason.message.includes('updateQuery')) {
			console.log('Caught unhandled Apollo promise rejection');
			event.preventDefault();
			return false;
		}
	}
});

// Create a React Error Boundary to catch component crashes
class PrototypoErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false, error: null };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true, error: error };
	}

	componentDidCatch(error, errorInfo) {
		console.log('Error Boundary caught error:', error.message);
		if (error.message && error.message.includes('catch')) {
			console.log('Error Boundary: Apollo error caught and handled');
			// Reset error state for Apollo errors to allow retry
			setTimeout(() => {
				this.setState({ hasError: false, error: null });
			}, 100);
		}
	}

	render() {
		if (this.state.hasError && this.state.error && !this.state.error.message.includes('catch')) {
			return React.createElement('div', {
				style: { padding: '20px', textAlign: 'center' }
			}, [
				React.createElement('h2', { key: 'title' }, 'Prototypo Font Editor'),
				React.createElement('p', { key: 'msg' }, 'Loading font editor interface...'),
				React.createElement('button', {
					key: 'retry',
					onClick: () => this.setState({ hasError: false, error: null }),
					style: { 
						padding: '10px 20px', 
						backgroundColor: '#007cba', 
						color: 'white', 
						border: 'none', 
						borderRadius: '4px',
						cursor: 'pointer'
					}
				}, 'Retry')
			]);
		}

		return this.props.children;
	}
}

// Mock fetch for any remaining network calls
const originalFetch = window.fetch;
window.fetch = (...args) => {
	console.log('Blocked network request in offline mode:', args[0]);
	return Promise.resolve(new Response('{}', { status: 200, headers: { 'Content-Type': 'application/json' } }));
};

// Import actions
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

// Immediate initialization without loading screen
async function startApp() {
	console.log('Starting Prototypo...');
	
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

	localServer.on('action', ({path, params}) => {
		if (actions[path] !== undefined) {
			actions[path](params);
		}
	}, localServer.lifespan);

	const fluxEvent = new Event('fluxServer.setup');
	window.dispatchEvent(fluxEvent);

	console.log('Loading templates from folder...');
	
	try {
		// Use the new folder-based template loader
		const {templateList, templatesData} = await initializeTemplatesFromFolder();
		
		// Update the prototypo store with the discovered template list
		const templateListPatch = prototypoStore.set('templateList', templateList).commit();
		localServer.dispatchUpdate('/prototypoStore', templateListPatch);
		
		// Initialize FontMediator with the loaded templates
		if (templatesData.length > 0) {
			await FontMediator.init(templatesData);
			const templateDataPatch = prototypoStore.set('templatesData', templatesData).commit();
			localServer.dispatchUpdate('/prototypoStore', templateDataPatch);
			console.log(`✅ Loaded ${templatesData.length} templates from folder`);
		} else {
			console.warn('⚠️ No templates found in folder, using fallback');
		}
	} catch (error) {
		console.warn('❌ Folder-based template loading failed, falling back to hardcoded list:', error);
		
		// Fallback to original hardcoded approach
		try {
			const templates = await Promise.all(
				prototypoStore.get('templateList').map(async ({templateName}) => {
					try {
						const typedataJSON = await import(`../../dist/templates/${templateName}/font.json`);
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

			const validTemplates = templates.filter(template => template !== null);
			
			if (validTemplates.length > 0) {
				await FontMediator.init(validTemplates);
				const patch = prototypoStore.set('templatesData', validTemplates).commit();
				localServer.dispatchUpdate('/prototypoStore', patch);
				console.log(`Loaded ${validTemplates.length} templates (fallback mode)`);
			}
		} catch (fallbackError) {
			console.error('Both folder-based and fallback template loading failed:', fallbackError);
		}
	}

	// Set up template for onboarding
	console.log('Setting up template for onboarding...');
	
	// Find the default template data and set it for onboarding
	const validTemplates = prototypoStore.get('templatesData') || [];
	const defaultTemplateData = validTemplates.find(t => t.name === 'venus.ptf');
	
	if (defaultTemplateData) {
		const templatePatch = prototypoStore.set('uiCreatefamilySelectedTemplate', {
			name: defaultTemplateData.name,
			json: defaultTemplateData.json,
			initValues: defaultTemplateData.initValues,
			glyphs: defaultTemplateData.glyphs
		}).commit();
		localServer.dispatchUpdate('/prototypoStore', templatePatch);
		console.log('Set default template for onboarding.');
	}
	
	// Start with onboarding to create a font project
	console.log('Current hash:', location.hash);
	if (location.hash === '#/' || !location.hash) {
		location.hash = '#/onboarding';
		console.log('Redirected to onboarding');
	}

	// Load app values
	try {
		await loadStuff();
		console.log('App values loaded');
	} catch (err) {
		console.log('Offline mode - limited functionality:', err);
	}

	// Render the app with Error Boundary
	console.log('Rendering app...');
	const content = document.getElementById('content');
	ReactDOM.render(
		React.createElement(PrototypoErrorBoundary, {}, React.createElement(App)),
		content
	);
	
	// Add debug utilities for font export debugging
	addDebugUtilities();
	
	// Add global test font export function
	window.testFontExport = function() {
		console.log('🧪 Testing font export...');
		try {
			const LocalClient = require('./stores/local-client.stores').default;
			const client = LocalClient.instance();
			
			// Trigger OTF export
			client.dispatchAction('/export-otf', {
				familyName: 'Test Font',
				variantName: 'Regular'
			});
			
			console.log('✅ Font export test initiated');
		} catch (error) {
			console.error('❌ Font export test failed:', error);
		}
	};
	
	console.log('🧪 Font export test available: window.testFontExport()');
	
	console.log('Prototypo started successfully!');
}

// Start immediately on desktop browsers
selectRenderOptions(
	() => {
		const content = document.getElementById('content');
		ReactDOM.render(<div>Mobile not supported in offline mode</div>, content);
	},
	() => {
const content = document.getElementById('content');
		ReactDOM.render(<div>Browser not supported</div>, content);
	},
	startApp
);