/* global trackJs */
import _throttle from 'lodash/throttle';
import _forOwn from 'lodash/forOwn';
import _cloneDeep from 'lodash/cloneDeep';
import {gql} from 'react-apollo';

import {
	prototypoStore,
	undoableStore,
	fontInstanceStore,
} from '../stores/creation.stores';
import {toileType} from '../toile/toile';
import LocalServer from '../stores/local-server.stores';
import LocalClient from '../stores/local-client.stores';

import {FontValues} from '../services/values.services';
import apolloClient from '../services/graphcool.services';

import {loadFontValues, saveAppValues} from '../helpers/loadValues.helpers';
import {BatchUpdate} from '../helpers/undo-stack.helpers';

let localServer;
let localClient;
let undoWatcher;
let undoGuidesWatcher;

const debouncedSave = _throttle((values, variantId) => {
	FontValues.save({
		values,
		variantId,
	});
}, 2000);

window.addEventListener('fluxServer.setup', () => {
	localClient = LocalClient.instance();
	localServer = LocalServer.instance;

	undoWatcher = new BatchUpdate(
		undoableStore,
		'/undoableStore',
		'controlsValues',
		localClient,
		localServer.lifespan,
		name => `${name} modification`,
		(headJS) => {
			debouncedSave(headJS.controlsValues);
		},
	);

	undoGuidesWatcher = new BatchUpdate(
		undoableStore,
		'/undoableStore',
		'guides',
		localClient,
		localServer.lifespan,
		name => `${name} modification`,
	);
});

export default {
	'/create-font-instance': ({typedataJSON, appValues, templateToLoad}) => {
		const typedata = typedataJSON;
		const {tags, familyName} = typedata.fontinfo;
		const {controls, presets} = typedata;
		const db = appValues.values.variantSelected.id;

		localClient.dispatchAction('/store-value-font', {
			familyName,
			db,
			typedata,
			templateToLoad,
		});

		localClient.dispatchAction('/create-font', typedata);
		localClient.dispatchAction('/load-params', {controls, presets});
		localClient.dispatchAction('/load-tags', tags);
		loadFontValues(typedata, templateToLoad, db);
	},
	'/load-font-instance': async ({appValues}) => {
		if (!appValues.values.variantSelected) {
			const event = new CustomEvent('values.loaded');

			window.dispatchEvent(event);
		}
		else {
			try {
				const template = appValues.values.familySelected
					? appValues.values.familySelected.template
					: 'venus.ptf';
				const typedataJSON = await import(/* webpackChunkName: "ptfs" */ `../../../dist/templates/${template}/font.json`);

				localClient.dispatchAction('/create-font-instance', {
					typedataJSON,
					appValues,
					templateToLoad: template,
				});
			}
			catch (err) {
				trackJs.track(err);
			}
		}
	},
	'/create-font': (typedata) => {
		const glyphs = {};

		_forOwn(typedata.glyphs, (glyph) => {
			if (!glyphs[glyph.unicode]) {
				glyphs[glyph.unicode] = [];
			}
			glyphs[glyph.unicode].push(glyph);
		});

		localClient.dispatchAction('/load-glyphs', glyphs);

		const patch = prototypoStore
			.set('fontName', typedata.fontinfo.familyName)
			.commit();

		localServer.dispatchUpdate('/prototypoStore', patch);
	},
	'/change-font-from-typedata': async ({
		typedataJSON: typedata,
		variantId,
		templateToLoad,
	}) => {
		localClient.dispatchAction('/store-value-font', {
			familyName: typedata.fontinfo.familyName,
			typedata,
			templateToLoad,
		});

		localClient.dispatchAction('/create-font', typedata);

		localClient.dispatchAction('/load-params', {
			controls: typedata.controls,
			presets: typedata.presets,
		});
		localClient.dispatchAction('/load-tags', typedata.fontinfo.tags);
	},
	'/change-font': async ({templateToLoad, variant, family}) => {
		const typedataJSON = await import(/* webpackChunkName: "ptfs" */ `../../../dist/templates/${templateToLoad}/font.json`);

		localClient.dispatchAction('/store-value-font', {
			changingFont: true,
		});
		localClient.dispatchAction('/change-font-from-typedata', {
			typedataJSON,
			variantId: variant.id,
			templateToLoad,
		});

		const initValues = {};

		typedataJSON.controls.forEach(group =>
			group.parameters.forEach((param) => {
				initValues[param.name] = param.init;
			}),
		);

			const fontValues = await FontValues.get({variantId: variant.id});

	const patchVariant = prototypoStore
		.set('variant', variant)
		.set('family', family)
		.commit();

	localServer.dispatchUpdate('/prototypoStore', patchVariant);

	// Handle case where fontValues is undefined (GraphQL error, missing variant, etc.)
	const altList = {
		...typedataJSON.fontinfo.defaultAlts,
		...fontValues?.values?.altList,
	};

	// Ensure we always have control values, even if fontValues is undefined
	const valuesToLoad = {
		...initValues,
		...fontValues?.values,
	};
	
	console.log('Loading font values for sliders:', {
		initValues: Object.keys(initValues).length,
		fontValues: fontValues?.values ? Object.keys(fontValues.values).length : 0,
		totalValues: Object.keys(valuesToLoad).length,
		templateName: templateToLoad
	});

	localClient.dispatchAction('/load-values', valuesToLoad);

		localClient.dispatchAction('/clear-undo-stack');
		localClient.dispatchAction('/toggle-individualize', {
			targetIndivValue: false,
		});
		localClient.dispatchAction('/store-value', {uiSpacingMode: false});
		localClient.dispatchAction('/store-value-font', {
			changingFont: false,
		});
	},
	'/family-created': async ({name, variants, template}) => {
		// Handle offline mode where variants might not be provided
		const defaultVariant = variants && variants.length > 0 ? variants[0] : {
			id: 'default-variant',
			name: 'Regular',
			values: {
				thickness: 80,
				slant: 0,
				width: 100,
				optical: 10
			}
		};
		
		// Use fallback template if none provided
		const safeTemplate = template || 'venus.ptf';
		
		const patchVariant = prototypoStore
			.set('variant', defaultVariant)
			.set('family', {name, template: safeTemplate, variants: variants || [defaultVariant]})
			.set('uiCreatefamilySelectedTemplate', undefined)
			.set('openFamilyModal', false)
			.commit();

		localServer.dispatchUpdate('/prototypoStore', patchVariant);

		saveAppValues();

		const {data: {user}} = await apolloClient.query({
			query: gql`
				query getVariantsCount {
					user {
						id
						libraryMeta: _libraryMeta {
							count
						}
					}
				}
			`,
		});

		window.Intercom('update', {
			number_of_family: user.libraryMeta.count,
		});
	},
	'/select-variant': ({family, selectedVariant = family.variants[0]}) => {
		localClient.dispatchAction('/change-font', {
			templateToLoad: family.template,
			variant: {id: selectedVariant.id, name: selectedVariant.name},
			family,
		});
	},
	'/create-variant-from-ref': async ({ref, name, family, noSwitch}) => {
		const values = _cloneDeep(ref.values);
		const thicknessTransform = [
			{string: 'Thin', thickness: 20},
			{string: 'Light', thickness: 50},
			{string: 'Book', thickness: 70},
			{string: 'Bold', thickness: 115},
			{string: 'Semi-Bold', thickness: 100},
			{string: 'Extra-Bold', thickness: 135},
			{string: 'Black', thickness: 150},
		];

		thicknessTransform.forEach((item) => {
			if (name.includes(item.string)) {
				values.thickness = item.thickness;
			}
		});

		if (name.includes('Italic')) {
			values.slant = 10;
		}

		const {data: {variant}} = await apolloClient.mutate({
			mutation: gql`
				mutation createVariant($name: String!, $familyId: ID!, $values: Json) {
					variant: createVariant(
						name: $name
						familyId: $familyId
						values: $values
					) {
						id
						name
						updatedAt
					}
				}
			`,
			variables: {
				name,
				familyId: family.id,
				values,
			},
		});

		setTimeout(async () => {
			if (!noSwitch) {
				localClient.dispatchAction('/select-variant', {
					variant: {id: variant.id, name: variant.name},
					family,
				});
			}
		}, 200);

		localClient.dispatchAction('/store-value', {
			openVariantModal: false,
			openDuplicateVariantModal: false,
			errorAddVariant: undefined,
		});

		const {data: {user}} = await apolloClient.query({
			query: gql`
				query getvariantscount {
					user {
						id
						library {
							variantsmeta: _variantsmeta {
								count
							}
						}
					}
				}
			`,
		});

		window.intercom('update', {
			number_of_variants: user.library.reduce(
				(numberofvariants, {variantsmeta}) =>
					numberofvariants + variantsmeta.count,
				0,
			),
		});
	},
	'/delete-variant': ({variant}) => {
		console.log('DeleteVariant');
		console.log(variant);
		const currentVariant = prototypoStore.get('variant');
		const currentFamily = prototypoStore.get('family');

		if (variant.id === currentVariant.id) {
			const newVariant = currentFamily.variants[0];
			const patch = prototypoStore.set('variant', newVariant).commit();

			localClient.dispatchAction('/change-font', {
				templateToLoad: currentFamily.template,
				variantId: newVariant.id,
			});
			localServer.dispatchUpdate('/prototypoStore', patch);
		}

		saveAppValues();
	},
	'/delete-family': async ({family}) => {
		const currentFamily = prototypoStore.get('family');

		if (
			family.name === currentFamily.name
			&& family.template === currentFamily.template
		) {
			const {data: {user}} = await apolloClient.query({
				fetchPolicy: 'cache-first',
				query: gql`
					query getUserLibrary {
						user {
							id
							library {
								id
								name
								template
								variants {
									id
									name
								}
							}
						}
					}
				`,
			});

			const newFamily = {...user.library[0]};

			if (newFamily.variants) {
				const newVariant = {...newFamily.variants[0]};

				delete newFamily.variants;

				prototypoStore.set('family', newFamily);
				prototypoStore.set('variant', newVariant);
				localClient.dispatchAction('/change-font', {
					templateToLoad: newFamily.template,
					variantId: newVariant.id,
				});

				localServer.dispatchUpdate('/prototypoStore', prototypoStore.commit());
			}
		}

		saveAppValues();
	},
	'/clear-error-variant': () => {
		const patch = prototypoStore.set('errorAddVariant', undefined).commit();

		localServer.dispatchUpdate('/prototypoStore', patch);
	},
	'/select-family-collection': (family) => {
		const patch = prototypoStore
			.set('collectionSelectedFamily', family)
			.set('collectionSelectedVariant', undefined)
			.commit();

		localServer.dispatchUpdate('/prototypoStore', patch);
	},
	'/select-variant-collection': (variant) => {
		const patch = prototypoStore
			.set('collectionSelectedVariant', variant)
			.commit();

		localServer.dispatchUpdate('/prototypoStore', patch);
	},
	'/close-create-variant-modal': () => {
		const patch = prototypoStore.set('openVariantModal', false).commit();

		localServer.dispatchUpdate('/prototypoStore', patch);
	},
	'/change-param': ({values, value, name, force, label}) => {
		const indivMode = prototypoStore.get('indivMode');
		const indivEdit = prototypoStore.get('indivEditingParams');
		const variantId = (prototypoStore.get('variant') || {}).id;
		const currentGroupName = (prototypoStore.get('indivCurrentGroup') || {})
			.name;
		let newParams = {...undoableStore.get('controlsValues')};

		if (indivMode && indivEdit && !values) {
			if (newParams.indiv_group_param[currentGroupName][name]) {
				newParams.indiv_group_param = {
					...newParams.indiv_group_param,
					[currentGroupName]: {
						...newParams.indiv_group_param[currentGroupName],
						[name]: {
							...newParams.indiv_group_param[currentGroupName][name],
							value,
						},
					},
				};
			}
			else {
				newParams.indiv_group_param = {
					...newParams.indiv_group_param,
					[currentGroupName]: {
						...newParams.indiv_group_param[currentGroupName],
						[name]: {
							state: 'relative',
							value,
						},
					},
				};
			}
		}
		else if (values) {
			newParams = {...newParams, ...values};
		}
		else {
			newParams[name] = value;
		}

		const patch = undoableStore.set('controlsValues', newParams).commit();

		localServer.dispatchUpdate('/undoableStore', patch);

		if (force) {
			// TODO(franz): This SHOULD totally end up being in a flux store on hoodie
			undoWatcher.forceUpdate(patch, label);
			debouncedSave(newParams, variantId);
		}
		else {
			undoWatcher.update(patch, label);
		}
	},
	'/change-param-state': ({name, state, force, label}) => {
		const variantId = (prototypoStore.get('variant') || {}).id;
		const currentGroupName = prototypoStore.get('indivCurrentGroup').name;
		const newParams = {...undoableStore.get('controlsValues')};

		newParams.indiv_group_param[currentGroupName][name] = {
			state,
			value: state === 'relative' ? 1 : 0,
		};

		const patch = undoableStore.set('controlsValues', newParams).commit();

		localServer.dispatchUpdate('/undoableStore', patch);
		debouncedSave(newParams, variantId);

		if (force) {
			// TODO(franz): This SHOULD totally end up being in a flux store on hoodie
			undoWatcher.forceUpdate(patch, label);
		}
		else {
			undoWatcher.update(patch, label);
		}
	},
	'/change-letter-spacing': ({value, side, letter, label, force}) => {
		const variantId = (prototypoStore.get('variant') || {}).id;
		const oldValues = undoableStore.get('controlsValues');
		const newParams = {
			...oldValues,
			glyphSpecialProps: {...oldValues.glyphSpecialProps},
		};

		const unicode = letter.charCodeAt(0);

		newParams.glyphSpecialProps = newParams.glyphSpecialProps || {};
		newParams.glyphSpecialProps[unicode]
			= {...newParams.glyphSpecialProps[unicode]} || {};

		if (side === 'left') {
			newParams.glyphSpecialProps[unicode].spacingLeft = value;
		}
		else {
			newParams.glyphSpecialProps[unicode].spacingRight = value;
		}

		const patch = undoableStore.set('controlsValues', newParams).commit();

		localServer.dispatchUpdate('/undoableStore', patch);

		debouncedSave(newParams, variantId);

		if (force) {
			undoWatcher.forceUpdate(patch, label);
		}
		else {
			undoWatcher.update(patch, label);
		}
	},
	'/change-glyph-node-manually': ({
		changes,
		force,
		label = 'glyph node manual',
		glyphName,
	}) => {
		const variantId = (prototypoStore.get('variant') || {}).id;
		const oldValues = undoableStore.get('controlsValues');
		const postDepManualChanges
			= _cloneDeep(oldValues.postDepManualChanges) || {};

		postDepManualChanges[glyphName] = postDepManualChanges[glyphName] || {};
		postDepManualChanges[glyphName].cursors
			= postDepManualChanges[glyphName].cursors || {};

		const newParams = {
			...oldValues,
			postDepManualChanges: {
				...postDepManualChanges,
				[glyphName]: {
					...postDepManualChanges[glyphName],
					cursors: {
						...postDepManualChanges[glyphName].cursors,
						...changes,
					},
				},
			},
		};

		const patch = undoableStore.set('controlsValues', newParams).commit();

		localServer.dispatchUpdate('/undoableStore', patch);

		debouncedSave(newParams, variantId);

		if (force) {
			undoWatcher.forceUpdate(patch, label);
		}
		else {
			undoWatcher.update(patch, label);
		}
	},
	'/change-guides': ({guides, force, label = 'change guide'}) => {
		const patch = undoableStore.set('guides', guides).commit();

		localServer.dispatchUpdate('/undoableStore', patch);

		if (force) {
			undoGuidesWatcher.forceUpdate(patch, label);
			// saving the guides into the prototypoStore to sync into the app values
			localClient.dispatchAction('/store-value', {
				guides,
			});
		}
		else {
			undoGuidesWatcher.update(patch, label);
		}
	},
	'/reset-glyph-points-manually': ({
		glyphName,
		points,
		force = true,
		label = 'reset manual',
		unicode,
		globalMode,
	}) => {
		const oldValues = undoableStore.get('controlsValues');
		const postDepManualChanges
			= _cloneDeep(oldValues.postDepManualChanges) || {};
		const glyphSpecialProps = _cloneDeep(oldValues.glyphSpecialProps) || {};

		points.forEach((item) => {
			const {parentId, modifAddress, componentName} = item.data;
			const glyphOrCompName = globalMode ? componentName : glyphName;

			switch (item.type) {
			case toileType.NODE_IN:
			case toileType.CONTOUR_NODE_IN:
				delete postDepManualChanges[glyphOrCompName].cursors[
					`${parentId}.handleIn.x`
				];
				delete postDepManualChanges[glyphOrCompName].cursors[
					`${parentId}.handleIn.y`
				];
				break;
			case toileType.NODE_OUT:
			case toileType.CONTOUR_NODE_OUT:
				delete postDepManualChanges[glyphOrCompName].cursors[
					`${parentId}.handleOut.x`
				];
				delete postDepManualChanges[glyphOrCompName].cursors[
					`${parentId}.handleOut.y`
				];
				break;
			case toileType.NODE:
				delete postDepManualChanges[glyphOrCompName].cursors[`${item.id}.x`];
				delete postDepManualChanges[glyphOrCompName].cursors[`${item.id}.y`];
				delete postDepManualChanges[glyphOrCompName].cursors[
					`${item.id}.handleIn.x`
				];
				delete postDepManualChanges[glyphOrCompName].cursors[
					`${item.id}.handleIn.y`
				];
				delete postDepManualChanges[glyphOrCompName].cursors[
					`${item.id}.handleOut.x`
				];
				delete postDepManualChanges[glyphOrCompName].cursors[
					`${item.id}.handleOut.y`
				];
				break;
			case toileType.SPACING_HANDLE:
				if (item.id === 'spacingLeft') {
					glyphSpecialProps[unicode].spacingLeft = 0;
				}
				else {
					glyphSpecialProps[unicode].spacingRight = 0;
				}
				break;
			case toileType.CONTOUR_NODE:
			case toileType.NODE_SKELETON:
				delete postDepManualChanges[glyphOrCompName].cursors[
					`${modifAddress}x`
				];
				delete postDepManualChanges[glyphOrCompName].cursors[
					`${modifAddress}y`
				];
				delete postDepManualChanges[glyphOrCompName].cursors[
					`${modifAddress}.expand.distr`
				];
				break;
			default:
				break;
			}
		});

		const variantId = (prototypoStore.get('variant') || {}).id;

		const newParams = {
			...oldValues,
			postDepManualChanges,
			glyphSpecialProps,
		};

		const patch = undoableStore.set('controlsValues', newParams).commit();

		localServer.dispatchUpdate('/undoableStore', patch);

		debouncedSave(newParams, variantId);

		if (force) {
			undoWatcher.forceUpdate(patch, label);
		}
		else {
			undoWatcher.update(patch, label);
		}
	},
	'/reset-glyph-manually': ({
		glyphName,
		force = true,
		label = 'reset manual',
	}) => {
		const variantId = (prototypoStore.get('variant') || {}).id;
		const oldValues = undoableStore.get('controlsValues');
		const postDepManualChanges
			= _cloneDeep(oldValues.postDepManualChanges) || {};

		delete postDepManualChanges[glyphName];

		const newParams = {
			...oldValues,
			postDepManualChanges,
		};

		const patch = undoableStore.set('controlsValues', newParams).commit();

		localServer.dispatchUpdate('/undoableStore', patch);

		debouncedSave(newParams, variantId);

		if (force) {
			undoWatcher.forceUpdate(patch, label);
		}
		else {
			undoWatcher.update(patch, label);
		}
	},
	'/reset-all-glyphs': ({force = true, label = 'reset all glyphs'}) => {
		const variantId = (prototypoStore.get('variant') || {}).id;
		const oldValues = undoableStore.get('controlsValues');
		const postDepManualChanges = {};
		const newParams = {
			...oldValues,
			postDepManualChanges,
		};
		const patch = undoableStore.set('controlsValues', newParams).commit();

		localServer.dispatchUpdate('/undoableStore', patch);

		debouncedSave(newParams, variantId);

		if (force) {
			undoWatcher.forceUpdate(patch, label);
		}
		else {
			undoWatcher.update(patch, label);
		}
	},
	'/change-component': ({glyph, id, name, label = 'change component'}) => {
		const variantId = (prototypoStore.get('variant') || {}).id;
		const oldValues = undoableStore.get('controlsValues');
		const newParams = {
			...oldValues,
			glyphComponentChoice: {...oldValues.glyphComponentChoice},
		};

		newParams.glyphComponentChoice[glyph.name] = {
			...newParams.glyphComponentChoice[glyph.name],
			[id]: name,
		};

		const patch = undoableStore.set('controlsValues', newParams).commit();

		localServer.dispatchUpdate('/undoableStore', patch);

		debouncedSave(newParams, variantId);

		undoWatcher.forceUpdate(patch, label);
	},
	'/change-component-class': ({
		componentClass,
		name,
		label = 'change component',
	}) => {
		const variantId = (prototypoStore.get('variant') || {}).id;
		const oldValues = undoableStore.get('controlsValues');
		const template = fontInstanceStore.get('templateToLoad');
		const componentIdAndGlyphPerClass = fontInstanceStore.get(
			'componentIdAndGlyphPerClass',
		);

		const newParams = {
			...oldValues,
			glyphComponentChoice: {...oldValues.glyphComponentChoice},
		};

		componentIdAndGlyphPerClass[template][componentClass].forEach(
			([glyphName, id]) => {
				newParams.glyphComponentChoice[glyphName] = {
					...newParams.glyphComponentChoice[glyphName],
					[id]: name,
				};
			},
		);

		const patch = undoableStore.set('controlsValues', newParams).commit();

		localServer.dispatchUpdate('/undoableStore', patch);

		debouncedSave(newParams, variantId);

		undoWatcher.forceUpdate(patch, label);
	},
	'/set-preset': (presetName) => {
		const presets = prototypoStore.get('fontPresets');

		if (presets && presets[presetName]) {
			localClient.dispatchAction('/change-param', {
				values: presets[presetName],
				force: true,
				label: 'preset',
			});
		}
	},
};
