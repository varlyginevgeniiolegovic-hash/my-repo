import {
	prototypoStore,
	undoableStore,
	userStore,
} from '../stores/creation.stores.jsx';
import LocalServer from '../stores/local-server.stores.jsx';
import {valuesToLoad} from '../helpers/loadValues.helpers.js';

let localServer;

window.addEventListener('fluxServer.setup', () => {
	localServer = LocalServer.instance;
});

export default {
	'/load-app-values': ({values}) => {
		// TODO(franz): merge all the patch
		values.selected = values.selected || 'A'.charCodeAt(0);
		values.tab = values.tab || 'Func';
		values.pinned = values.pinned || [];
		values.tagSelected = values.tagSelected || 'all';
		values.mode = values.mode || ['glyph'];
		values.wordFontSize = values.wordFontSize || 1;
		values.textFontSize = values.textFontSize || 1;

		valuesToLoad.forEach((ref) => {
			prototypoStore.set(ref.local, values[ref.remote]);
		});

		const patch = prototypoStore.commit();

		localServer.dispatchUpdate('/prototypoStore', patch);

		// Saving the guides into the undoable store
		// see /change-guides for resync/save to get them back into the app values
		const guidePatch = undoableStore.set('guides', values.guides);

		localServer.dispatchUpdate('/undoableStore', guidePatch);

		const valuesLoadedEvent = new Event('appValues.loaded');

		window.dispatchEvent(valuesLoadedEvent);
	},
};
