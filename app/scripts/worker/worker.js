import FontPrecursor from '../prototypo.js/precursor/FontPrecursor';
import {fontToSfntTable} from '../opentype/font';

const fonts = {};

/* eslint-disable no-bitwise */
/* eslint-disable prefer-numeric-literals */
const getfsSelection = (weight, italic) =>
	(weight > 500
		? parseInt('0000000000100000', 2)
		: parseInt('0000000001000000', 2))
	| (italic ? parseInt('0000000000000001', 2) : parseInt('0000000000000000', 2));

/* eslint-disable no-restricted-globals */

// Layout of array is [
//   number of glyphs,
//   unicode,
//   advanceWidth,
//   spacingLeft,
//   spacingRight,
//   unicode,...
//   ]
function getFontValuesArray(font) {
	const glyphValuesArray = [];
	let length = 0;

	for (let i = 0; i < font.glyphs.length; i++) {
		const {
			unicode,
			spacingLeft,
			baseSpacingLeft,
			spacingRight,
			baseSpacingRight,
			advanceWidth,
		} = font.glyphs[i];

		if (unicode) {
			length++;
			glyphValuesArray.push(unicode);
			glyphValuesArray.push(advanceWidth);
			glyphValuesArray.push(spacingLeft);
			glyphValuesArray.push(baseSpacingLeft);
			glyphValuesArray.push(spacingRight);
			glyphValuesArray.push(baseSpacingRight);
		}
	}

	glyphValuesArray.unshift(length);

	const intArray = new Int32Array(glyphValuesArray);

	return new Uint8Array(intArray.buffer);
}

self.onmessage = (e) => {
	switch (e.data.type) {
	case 'createFont': {
		console.log('🔄 Loading fonts in worker:', e.data.data.map(t => t.name));
		e.data.data.forEach((typedata) => {
			try {
				fonts[typedata.name] = new FontPrecursor(typedata.json);
				console.log('✅ Successfully loaded font:', typedata.name);
			} catch (error) {
				console.error('❌ Failed to load font:', typedata.name, error);
			}
		});

		console.log('📋 Total fonts loaded:', Object.keys(fonts));
		self.postMessage({id: e.data.id});
		break;
	}
	case 'reloadFont': {
		try {
			console.log('🔄 Reloading font in worker:', e.data.data.name);
			fonts[e.data.data.name] = new FontPrecursor(e.data.data.json);
			console.log('✅ Successfully reloaded font:', e.data.data.name);
		} catch (error) {
			console.error('❌ Failed to reload font:', e.data.data.name, error);
		}

		self.postMessage({id: e.data.id});
		break;
	}
	case 'constructFont': {
		if (!fonts[e.data.data.name]) {
			console.error('🚨 Font not found in worker:', e.data.data.name);
			console.log('📋 Available fonts:', Object.keys(fonts));
			console.log('📝 Request data:', e.data.data);
			self.postMessage({
				id: e.data.id,
				error: `Font "${e.data.data.name}" not loaded in worker`
			});
			break;
		}
		
		try {
			const font = fonts[e.data.data.name].constructFont(
				e.data.data.params,
				e.data.data.subset,
			);

			// Ensure we have proper font metadata
			const familyName = e.data.data.familyName || 'Prototypo Font';
			const styleName = e.data.data.styleName || 'Regular';
			const weight = e.data.data.weight || 400;
			const width = e.data.data.width || 5;
			const italic = e.data.data.italic || false;
			
			console.log('🔧 Constructing font with metadata:', {
				familyName,
				styleName,
				weight,
				width,
				italic,
				glyphCount: font.glyphs ? font.glyphs.length : 0
			});
			
			const arrayBuffer = fontToSfntTable({
			...font,
			fontFamily: {en: familyName},
			fontSubfamily: {en: styleName},
			postScriptName: {en: `${familyName.replace(/\s/g, '')}-${styleName}`},
			unitsPerEm: 1024,
			usWeightClass: weight,
			usWidthClass: width,
			manufacturer: e.data.data.foundry || 'Prototypo',
			manufacturerURL: e.data.data.foundryUrl || 'https://prototypo.io',
			designer: e.data.data.designer || '',
			designerURL: e.data.data.designerUrl || '',
			version: '1.0',
			copyright: `© ${new Date().getFullYear()} Prototypo`,
			fsSelection: getfsSelection(weight, italic),
		});

		if (e.data.data.forExport) {
			const textEncoder = new TextEncoder('utf-8');
			const encodedId = textEncoder.encode(e.data.id);
			const resultBuffer = new Uint8Array(
				1
					+ encodedId.byteLength // ids plus length of ids
						+ arrayBuffer.byteLength,
			);

			resultBuffer.set(
				[encodedId.byteLength, ...encodedId, ...arrayBuffer],
				0,
			);

			self.postMessage(resultBuffer.buffer);
		}
		else {
			const textEncoder = new TextEncoder('utf-8');
			const encodedId = textEncoder.encode(e.data.id);
			const glyphValuesArray = getFontValuesArray(font);
			const resultBuffer = new Uint8Array(
				glyphValuesArray.byteLength
					+ 1
					+ encodedId.byteLength // ids plus length of ids
						+ arrayBuffer.byteLength,
			);

			resultBuffer.set(
				[
					encodedId.byteLength,
					...encodedId,
					...glyphValuesArray,
					...arrayBuffer,
				],
				0,
			);

			self.postMessage(resultBuffer.buffer);
			}
		} catch (error) {
			console.error('❌ Failed to construct font:', e.data.data.name, error);
			self.postMessage({
				id: e.data.id,
				error: `Font construction failed: ${error.message}`
			});
		}
		break;
	}
	default: {
		break;
	}
	}
};

self.onerror = () => {
	self.postMessage(true);
};

/* eslint-enable no-restricted-globals */
