import _forOwn from 'lodash/forOwn';
import {encode, sizeOf} from './encode';

/* eslint-disable babel/new-cap */
export function buildTableObj(tableName, fields, options) {
	const tableObj = {};

	fields.forEach((field) => {
		tableObj[field.name] = field.value;
	});

	tableObj.tableName = tableName;
	tableObj.fields = fields;

	_forOwn(options, (value, key) => {
		if (tableObj[key] !== undefined) {
			tableObj[key] = value;
		}
	});

	return tableObj;
}

export function encodeTable(tableObj) {
	return encode.TABLE(tableObj);
}

export function sizeOfTable(tableObj) {
	return sizeOf.TABLE(tableObj);
}

export class head {
	static make(options) {
		const timestamp = Math.round(new Date().getTime() / 1000) + 2082844800;
		let createdTimestamp = timestamp;

		if (options.createdTimestamp) {
			createdTimestamp = options.createdTimestamp + 2082844800;
		}

		return buildTableObj(
			'head',
			[
				{name: 'version', type: 'FIXED', value: 0x00010000},
				{name: 'fontRevision', type: 'FIXED', value: 0x00010000},
				{name: 'checkSumAdjustment', type: 'ULONG', value: 0},
				{name: 'magicNumber', type: 'ULONG', value: 0x5f0f3cf5},
				{name: 'flags', type: 'USHORT', value: 0},
				{name: 'unitsPerEm', type: 'USHORT', value: 1000},
				{name: 'created', type: 'LONGDATETIME', value: createdTimestamp},
				{name: 'modified', type: 'LONGDATETIME', value: timestamp},
				{name: 'xMin', type: 'SHORT', value: 0},
				{name: 'yMin', type: 'SHORT', value: 0},
				{name: 'xMax', type: 'SHORT', value: 0},
				{name: 'yMax', type: 'SHORT', value: 0},
				{name: 'macStyle', type: 'USHORT', value: 0},
				{name: 'lowestRecPPEM', type: 'USHORT', value: 0},
				{name: 'fontDirectionHint', type: 'SHORT', value: 2},
				{name: 'indexToLocFormat', type: 'SHORT', value: 0},
				{name: 'glyphDataFormat', type: 'SHORT', value: 0},
			],
			options,
		);
	}
}

export class hhea {
	static make(options) {
		return buildTableObj(
			'hhea',
			[
				{name: 'version', type: 'FIXED', value: 0x00010000},
				{name: 'ascender', type: 'FWORD', value: 0},
				{name: 'descender', type: 'FWORD', value: 0},
				{name: 'lineGap', type: 'FWORD', value: 0},
				{name: 'advanceWidthMax', type: 'UFWORD', value: 0},
				{name: 'minLeftSideBearing', type: 'FWORD', value: 0},
				{name: 'minRightSideBearing', type: 'FWORD', value: 0},
				{name: 'xMaxExtent', type: 'FWORD', value: 0},
				{name: 'caretSlopeRise', type: 'SHORT', value: 1},
				{name: 'caretSlopeRun', type: 'SHORT', value: 0},
				{name: 'caretOffset', type: 'SHORT', value: 0},
				{name: 'reserved1', type: 'SHORT', value: 0},
				{name: 'reserved2', type: 'SHORT', value: 0},
				{name: 'reserved3', type: 'SHORT', value: 0},
				{name: 'reserved4', type: 'SHORT', value: 0},
				{name: 'metricDataFormat', type: 'SHORT', value: 0},
				{name: 'numberOfHMetrics', type: 'USHORT', value: 0},
			],
			options,
		);
	}
}

export class maxp {
	static make(numGlyphs) {
		return buildTableObj('maxp', [
			{name: 'version', type: 'FIXED', value: 0x00005000},
			{name: 'numGlyphs', type: 'USHORT', value: numGlyphs},
		]);
	}
}

export class os2 {
	static make(options) {
		return buildTableObj(
			'OS/2',
			[
				{name: 'version', type: 'USHORT', value: 0x0003},
				{name: 'xAvgCharWidth', type: 'SHORT', value: 0},
				{name: 'usWeightClass', type: 'USHORT', value: 0},
				{name: 'usWidthClass', type: 'USHORT', value: 0},
				{name: 'fsType', type: 'USHORT', value: 0},
				{name: 'ySubscriptXSize', type: 'SHORT', value: 650},
				{name: 'ySubscriptYSize', type: 'SHORT', value: 699},
				{name: 'ySubscriptXOffset', type: 'SHORT', value: 0},
				{name: 'ySubscriptYOffset', type: 'SHORT', value: 140},
				{name: 'ySuperscriptXSize', type: 'SHORT', value: 650},
				{name: 'ySuperscriptYSize', type: 'SHORT', value: 699},
				{name: 'ySuperscriptXOffset', type: 'SHORT', value: 0},
				{name: 'ySuperscriptYOffset', type: 'SHORT', value: 479},
				{name: 'yStrikeoutSize', type: 'SHORT', value: 49},
				{name: 'yStrikeoutPosition', type: 'SHORT', value: 258},
				{name: 'sFamilyClass', type: 'SHORT', value: 0},
				{name: 'bFamilyType', type: 'BYTE', value: 0},
				{name: 'bSerifStyle', type: 'BYTE', value: 0},
				{name: 'bWeight', type: 'BYTE', value: 0},
				{name: 'bProportion', type: 'BYTE', value: 0},
				{name: 'bContrast', type: 'BYTE', value: 0},
				{name: 'bStrokeVariation', type: 'BYTE', value: 0},
				{name: 'bArmStyle', type: 'BYTE', value: 0},
				{name: 'bLetterform', type: 'BYTE', value: 0},
				{name: 'bMidline', type: 'BYTE', value: 0},
				{name: 'bXHeight', type: 'BYTE', value: 0},
				{name: 'ulUnicodeRange1', type: 'ULONG', value: 0},
				{name: 'ulUnicodeRange2', type: 'ULONG', value: 0},
				{name: 'ulUnicodeRange3', type: 'ULONG', value: 0},
				{name: 'ulUnicodeRange4', type: 'ULONG', value: 0},
				{name: 'achVendID', type: 'CHARARRAY', value: 'XXXX'},
				{name: 'fsSelection', type: 'USHORT', value: 0},
				{name: 'usFirstCharIndex', type: 'USHORT', value: 0},
				{name: 'usLastCharIndex', type: 'USHORT', value: 0},
				{name: 'sTypoAscender', type: 'SHORT', value: 0},
				{name: 'sTypoDescender', type: 'SHORT', value: 0},
				{name: 'sTypoLineGap', type: 'SHORT', value: 0},
				{name: 'usWinAscent', type: 'USHORT', value: 0},
				{name: 'usWinDescent', type: 'USHORT', value: 0},
				{name: 'ulCodePageRange1', type: 'ULONG', value: 0},
				{name: 'ulCodePageRange2', type: 'ULONG', value: 0},
				{name: 'sxHeight', type: 'SHORT', value: 0},
				{name: 'sCapHeight', type: 'SHORT', value: 0},
				{name: 'usDefaultChar', type: 'USHORT', value: 0},
				{name: 'usBreakChar', type: 'USHORT', value: 0},
				{name: 'usMaxContext', type: 'USHORT', value: 0},
			],
			options,
		);
	}
}

export class hmtx {
	static make(glyphs) {
		const t = buildTableObj('hmtx', []);

		for (let i = 0; i < glyphs.length; i++) {
			const glyph = glyphs[i];
			const advanceWidth = glyph.advanceWidth || 0;
			const leftSideBearing = glyph.spacingLeft || 0;

			t.fields.push({
				name: `advanceWidth_${i}`,
				type: 'USHORT',
				value: advanceWidth,
			});
			t.fields.push({
				name: `leftSideBearing_${i}`,
				type: 'SHORT',
				value: leftSideBearing,
			});
		}

		return t;
	}
}

function addSegment(t, code, glyphIndex) {
	t.segments.push({
		end: code,
		start: code,
		delta: -(code - glyphIndex),
		offset: 0,
	});
}

function addTerminatorSegment(t) {
	t.segments.push({
		end: 0xffff,
		start: 0xffff,
		delta: 1,
		offset: 0,
	});
}

export class cmap {
	static make(glyphs) {
		let i;

		const t = buildTableObj('cmap', [
			{name: 'version', type: 'USHORT', value: 0},
			{name: 'numTables', type: 'USHORT', value: 1},
			{name: 'platformID', type: 'USHORT', value: 3},
			{name: 'encodingID', type: 'USHORT', value: 1},
			{name: 'offset', type: 'ULONG', value: 12},
			{name: 'format', type: 'USHORT', value: 4},
			{name: 'length', type: 'USHORT', value: 0},
			{name: 'language', type: 'USHORT', value: 0},
			{name: 'segCountX2', type: 'USHORT', value: 0},
			{name: 'searchRange', type: 'USHORT', value: 0},
			{name: 'entrySelector', type: 'USHORT', value: 0},
			{name: 'rangeShift', type: 'USHORT', value: 0},
		]);

		t.segments = [];
		for (i = 0; i < glyphs.length; i++) {
			const glyph = glyphs[i];
			// WARNING: This is because we have one unicode per glyph right now
			// But it might change.
			const unicodes = [glyph.unicode];

			for (let j = 0; j < unicodes.length; j++) {
				addSegment(t, unicodes[j], i);
			}
		}

		t.segments = t.segments.sort((a, b) => a.start - b.start);

		addTerminatorSegment(t);

		const segCount = t.segments.length;

		t.segCountX2 = segCount * 2;
		t.searchRange = 2 ** Math.floor(Math.log(segCount) / Math.log(2)) * 2;
		t.entrySelector = Math.log(t.searchRange / 2) / Math.log(2);
		t.rangeShift = t.segCountX2 - t.searchRange;

		// Set up parallel segment arrays.
		let endCounts = [];
		let startCounts = [];
		let idDeltas = [];
		let idRangeOffsets = [];
		let glyphIds = [];

		for (i = 0; i < segCount; i++) {
			const segment = t.segments[i];

			endCounts = endCounts.concat({
				name: `end_${i}`,
				type: 'USHORT',
				value: segment.end,
			});
			startCounts = startCounts.concat({
				name: `start_${i}`,
				type: 'USHORT',
				value: segment.start,
			});
			idDeltas = idDeltas.concat({
				name: `idDelta_${i}`,
				type: 'SHORT',
				value: segment.delta,
			});
			idRangeOffsets = idRangeOffsets.concat({
				name: `idRangeOffset_${i}`,
				type: 'USHORT',
				value: segment.offset,
			});
			if (segment.glyphId !== undefined) {
				glyphIds = glyphIds.concat({
					name: `glyph_${i}`,
					type: 'USHORT',
					value: segment.glyphId,
				});
			}
		}

		t.fields = t.fields.concat(endCounts);
		t.fields.push({name: 'reservedPad', type: 'USHORT', value: 0});
		t.fields = t.fields.concat(startCounts);
		t.fields = t.fields.concat(idDeltas);
		t.fields = t.fields.concat(idRangeOffsets);
		t.fields = t.fields.concat(glyphIds);

		t.length
			= 14 // Subtable header
			+ endCounts.length * 2
			+ 2 // reservedPad
			+ startCounts.length * 2
			+ idDeltas.length * 2
			+ idRangeOffsets.length * 2
			+ glyphIds.length * 2;

		return t;
	}
}

const utf16 = 'utf-16';

// MacOS script ID → encoding. This table stores the default case,
// which can be overridden by macLanguageEncodings.
const macScriptEncodings = {
	0: 'macintosh', // smRoman
	1: 'x-mac-japanese', // smJapanese
	2: 'x-mac-chinesetrad', // smTradChinese
	3: 'x-mac-korean', // smKorean
	6: 'x-mac-greek', // smGreek
	7: 'x-mac-cyrillic', // smCyrillic
	9: 'x-mac-devanagai', // smDevanagari
	10: 'x-mac-gurmukhi', // smGurmukhi
	11: 'x-mac-gujarati', // smGujarati
	12: 'x-mac-oriya', // smOriya
	13: 'x-mac-bengali', // smBengali
	14: 'x-mac-tamil', // smTamil
	15: 'x-mac-telugu', // smTelugu
	16: 'x-mac-kannada', // smKannada
	17: 'x-mac-malayalam', // smMalayalam
	18: 'x-mac-sinhalese', // smSinhalese
	19: 'x-mac-burmese', // smBurmese
	20: 'x-mac-khmer', // smKhmer
	21: 'x-mac-thai', // smThai
	22: 'x-mac-lao', // smLao
	23: 'x-mac-georgian', // smGeorgian
	24: 'x-mac-armenian', // smArmenian
	25: 'x-mac-chinesesimp', // smSimpChinese
	26: 'x-mac-tibetan', // smTibetan
	27: 'x-mac-mongolian', // smMongolian
	28: 'x-mac-ethiopic', // smEthiopic
	29: 'x-mac-ce', // smCentralEuroRoman
	30: 'x-mac-vietnamese', // smVietnamese
	31: 'x-mac-extarabic', // smExtArabic
};

// MacOS language ID → encoding. This table stores the exceptional
// cases, which override macScriptEncodings. For writing MacOS naming
// tables, we need to emit a MacOS script ID. Therefore, we cannot
// merge macScriptEncodings into macLanguageEncodings.
//
// http://unicode.org/Public/MAPPINGS/VENDORS/APPLE/Readme.txt
const macLanguageEncodings = {
	15: 'x-mac-icelandic', // langIcelandic
	17: 'x-mac-turkish', // langTurkish
	18: 'x-mac-croatian', // langCroatian
	24: 'x-mac-ce', // langLithuanian
	25: 'x-mac-ce', // langPolish
	26: 'x-mac-ce', // langHungarian
	27: 'x-mac-ce', // langEstonian
	28: 'x-mac-ce', // langLatvian
	30: 'x-mac-icelandic', // langFaroese
	37: 'x-mac-romanian', // langRomanian
	38: 'x-mac-ce', // langCzech
	39: 'x-mac-ce', // langSlovak
	40: 'x-mac-ce', // langSlovenian
	143: 'x-mac-inuit', // langInuktitut
	146: 'x-mac-gaelic', // langIrishGaelicScript
};

const macLanguages = {
	0: 'en',
	1: 'fr',
	2: 'de',
	3: 'it',
	4: 'nl',
	5: 'sv',
	6: 'es',
	7: 'da',
	8: 'pt',
	9: 'no',
	10: 'he',
	11: 'ja',
	12: 'ar',
	13: 'fi',
	14: 'el',
	15: 'is',
	16: 'mt',
	17: 'tr',
	18: 'hr',
	19: 'zh-Hant',
	20: 'ur',
	21: 'hi',
	22: 'th',
	23: 'ko',
	24: 'lt',
	25: 'pl',
	26: 'hu',
	27: 'es',
	28: 'lv',
	29: 'se',
	30: 'fo',
	31: 'fa',
	32: 'ru',
	33: 'zh',
	34: 'nl-BE',
	35: 'ga',
	36: 'sq',
	37: 'ro',
	38: 'cz',
	39: 'sk',
	40: 'si',
	41: 'yi',
	42: 'sr',
	43: 'mk',
	44: 'bg',
	45: 'uk',
	46: 'be',
	47: 'uz',
	48: 'kk',
	49: 'az-Cyrl',
	50: 'az-Arab',
	51: 'hy',
	52: 'ka',
	53: 'mo',
	54: 'ky',
	55: 'tg',
	56: 'tk',
	57: 'mn-CN',
	58: 'mn',
	59: 'ps',
	60: 'ks',
	61: 'ku',
	62: 'sd',
	63: 'bo',
	64: 'ne',
	65: 'sa',
	66: 'mr',
	67: 'bn',
	68: 'as',
	69: 'gu',
	70: 'pa',
	71: 'or',
	72: 'ml',
	73: 'kn',
	74: 'ta',
	75: 'te',
	76: 'si',
	77: 'my',
	78: 'km',
	79: 'lo',
	80: 'vi',
	81: 'id',
	82: 'tl',
	83: 'ms',
	84: 'ms-Arab',
	85: 'am',
	86: 'ti',
	87: 'om',
	88: 'so',
	89: 'sw',
	90: 'rw',
	91: 'rn',
	92: 'ny',
	93: 'mg',
	94: 'eo',
	128: 'cy',
	129: 'eu',
	130: 'ca',
	131: 'la',
	132: 'qu',
	133: 'gn',
	134: 'ay',
	135: 'tt',
	136: 'ug',
	137: 'dz',
	138: 'jv',
	139: 'su',
	140: 'gl',
	141: 'af',
	142: 'br',
	143: 'iu',
	144: 'gd',
	145: 'gv',
	146: 'ga',
	147: 'to',
	148: 'el-polyton',
	149: 'kl',
	150: 'az',
	151: 'nn',
};

// While Microsoft indicates a region/country for all its language
// IDs, we omit the region code if it's equal to the "most likely
// region subtag" according to Unicode CLDR. For scripts, we omit
// the subtag if it is equal to the Suppress-Script entry in the
// IANA language subtag registry for IETF BCP 47.
//
// For example, Microsoft states that its language code 0x041A is
// Croatian in Croatia. We transform this to the BCP 47 language code 'hr'
// and not 'hr-HR' because Croatia is the default country for Croatian,
// according to Unicode CLDR. As another example, Microsoft states
// that 0x101A is Croatian (Latin) in Bosnia-Herzegovina. We transform
// this to 'hr-BA' and not 'hr-Latn-BA' because Latin is the default script
// for the Croatian language, according to IANA.
//
// http://www.unicode.org/cldr/charts/latest/supplemental/likely_subtags.html
// http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
const windowsLanguages = {
	0x0436: 'af',
	0x041c: 'sq',
	0x0484: 'gsw',
	0x045e: 'am',
	0x1401: 'ar-DZ',
	0x3c01: 'ar-BH',
	0x0c01: 'ar',
	0x0801: 'ar-IQ',
	0x2c01: 'ar-JO',
	0x3401: 'ar-KW',
	0x3001: 'ar-LB',
	0x1001: 'ar-LY',
	0x1801: 'ary',
	0x2001: 'ar-OM',
	0x4001: 'ar-QA',
	0x0401: 'ar-SA',
	0x2801: 'ar-SY',
	0x1c01: 'aeb',
	0x3801: 'ar-AE',
	0x2401: 'ar-YE',
	0x042b: 'hy',
	0x044d: 'as',
	0x082c: 'az-Cyrl',
	0x042c: 'az',
	0x046d: 'ba',
	0x042d: 'eu',
	0x0423: 'be',
	0x0845: 'bn',
	0x0445: 'bn-IN',
	0x201a: 'bs-Cyrl',
	0x141a: 'bs',
	0x047e: 'br',
	0x0402: 'bg',
	0x0403: 'ca',
	0x0c04: 'zh-HK',
	0x1404: 'zh-MO',
	0x0804: 'zh',
	0x1004: 'zh-SG',
	0x0404: 'zh-TW',
	0x0483: 'co',
	0x041a: 'hr',
	0x101a: 'hr-BA',
	0x0405: 'cs',
	0x0406: 'da',
	0x048c: 'prs',
	0x0465: 'dv',
	0x0813: 'nl-BE',
	0x0413: 'nl',
	0x0c09: 'en-AU',
	0x2809: 'en-BZ',
	0x1009: 'en-CA',
	0x2409: 'en-029',
	0x4009: 'en-IN',
	0x1809: 'en-IE',
	0x2009: 'en-JM',
	0x4409: 'en-MY',
	0x1409: 'en-NZ',
	0x3409: 'en-PH',
	0x4809: 'en-SG',
	0x1c09: 'en-ZA',
	0x2c09: 'en-TT',
	0x0809: 'en-GB',
	0x0409: 'en',
	0x3009: 'en-ZW',
	0x0425: 'et',
	0x0438: 'fo',
	0x0464: 'fil',
	0x040b: 'fi',
	0x080c: 'fr-BE',
	0x0c0c: 'fr-CA',
	0x040c: 'fr',
	0x140c: 'fr-LU',
	0x180c: 'fr-MC',
	0x100c: 'fr-CH',
	0x0462: 'fy',
	0x0456: 'gl',
	0x0437: 'ka',
	0x0c07: 'de-AT',
	0x0407: 'de',
	0x1407: 'de-LI',
	0x1007: 'de-LU',
	0x0807: 'de-CH',
	0x0408: 'el',
	0x046f: 'kl',
	0x0447: 'gu',
	0x0468: 'ha',
	0x040d: 'he',
	0x0439: 'hi',
	0x040e: 'hu',
	0x040f: 'is',
	0x0470: 'ig',
	0x0421: 'id',
	0x045d: 'iu',
	0x085d: 'iu-Latn',
	0x083c: 'ga',
	0x0434: 'xh',
	0x0435: 'zu',
	0x0410: 'it',
	0x0810: 'it-CH',
	0x0411: 'ja',
	0x044b: 'kn',
	0x043f: 'kk',
	0x0453: 'km',
	0x0486: 'quc',
	0x0487: 'rw',
	0x0441: 'sw',
	0x0457: 'kok',
	0x0412: 'ko',
	0x0440: 'ky',
	0x0454: 'lo',
	0x0426: 'lv',
	0x0427: 'lt',
	0x082e: 'dsb',
	0x046e: 'lb',
	0x042f: 'mk',
	0x083e: 'ms-BN',
	0x043e: 'ms',
	0x044c: 'ml',
	0x043a: 'mt',
	0x0481: 'mi',
	0x047a: 'arn',
	0x044e: 'mr',
	0x047c: 'moh',
	0x0450: 'mn',
	0x0850: 'mn-CN',
	0x0461: 'ne',
	0x0414: 'nb',
	0x0814: 'nn',
	0x0482: 'oc',
	0x0448: 'or',
	0x0463: 'ps',
	0x0415: 'pl',
	0x0416: 'pt',
	0x0816: 'pt-PT',
	0x0446: 'pa',
	0x046b: 'qu-BO',
	0x086b: 'qu-EC',
	0x0c6b: 'qu',
	0x0418: 'ro',
	0x0417: 'rm',
	0x0419: 'ru',
	0x243b: 'smn',
	0x103b: 'smj-NO',
	0x143b: 'smj',
	0x0c3b: 'se-FI',
	0x043b: 'se',
	0x083b: 'se-SE',
	0x203b: 'sms',
	0x183b: 'sma-NO',
	0x1c3b: 'sms',
	0x044f: 'sa',
	0x1c1a: 'sr-Cyrl-BA',
	0x0c1a: 'sr',
	0x181a: 'sr-Latn-BA',
	0x081a: 'sr-Latn',
	0x046c: 'nso',
	0x0432: 'tn',
	0x045b: 'si',
	0x041b: 'sk',
	0x0424: 'sl',
	0x2c0a: 'es-AR',
	0x400a: 'es-BO',
	0x340a: 'es-CL',
	0x240a: 'es-CO',
	0x140a: 'es-CR',
	0x1c0a: 'es-DO',
	0x300a: 'es-EC',
	0x440a: 'es-SV',
	0x100a: 'es-GT',
	0x480a: 'es-HN',
	0x080a: 'es-MX',
	0x4c0a: 'es-NI',
	0x180a: 'es-PA',
	0x3c0a: 'es-PY',
	0x280a: 'es-PE',
	0x500a: 'es-PR',
	// Microsoft has defined two different language codes for
	// “Spanish with modern sorting” and “Spanish with traditional
	// sorting”. This makes sense for collation APIs, and it would be
	// possible to express this in BCP 47 language tags via Unicode
	// extensions (eg., es-u-co-trad is Spanish with traditional
	// sorting). However, for storing names in fonts, the distinction
	// does not make sense, so we give “es” in both cases.
	0x0c0a: 'es',
	0x040a: 'es',

	0x540a: 'es-US',
	0x380a: 'es-UY',
	0x200a: 'es-VE',
	0x081d: 'sv-FI',
	0x041d: 'sv',
	0x045a: 'syr',
	0x0428: 'tg',
	0x085f: 'tzm',
	0x0449: 'ta',
	0x0444: 'tt',
	0x044a: 'te',
	0x041e: 'th',
	0x0451: 'bo',
	0x041f: 'tr',
	0x0442: 'tk',
	0x0480: 'ug',
	0x0422: 'uk',
	0x042e: 'hsb',
	0x0420: 'ur',
	0x0843: 'uz-Cyrl',
	0x0443: 'uz',
	0x042a: 'vi',
	0x0452: 'cy',
	0x0488: 'wo',
	0x0485: 'sah',
	0x0478: 'ii',
	0x046a: 'yo',
};

// MacOS language ID → MacOS script ID
//
// Note that the script ID is not sufficient to determine what encoding
// to use in TrueType files. For some languages, MacOS used a modification
// of a mainstream script. For example, an Icelandic name would be stored
// with smRoman in the TrueType naming table, but the actual encoding
// is a special Icelandic version of the normal Macintosh Roman encoding.
// As another example, Inuktitut uses an 8-bit encoding for Canadian Aboriginal
// Syllables but MacOS had run out of available script codes, so this was
// done as a (pretty radical) "modification" of Ethiopic.
//
// http://unicode.org/Public/MAPPINGS/VENDORS/APPLE/Readme.txt
const macLanguageToScript = {
	0: 0, // langEnglish → smRoman
	1: 0, // langFrench → smRoman
	2: 0, // langGerman → smRoman
	3: 0, // langItalian → smRoman
	4: 0, // langDutch → smRoman
	5: 0, // langSwedish → smRoman
	6: 0, // langSpanish → smRoman
	7: 0, // langDanish → smRoman
	8: 0, // langPortuguese → smRoman
	9: 0, // langNorwegian → smRoman
	10: 5, // langHebrew → smHebrew
	11: 1, // langJapanese → smJapanese
	12: 4, // langArabic → smArabic
	13: 0, // langFinnish → smRoman
	14: 6, // langGreek → smGreek
	15: 0, // langIcelandic → smRoman (modified)
	16: 0, // langMaltese → smRoman
	17: 0, // langTurkish → smRoman (modified)
	18: 0, // langCroatian → smRoman (modified)
	19: 2, // langTradChinese → smTradChinese
	20: 4, // langUrdu → smArabic
	21: 9, // langHindi → smDevanagari
	22: 21, // langThai → smThai
	23: 3, // langKorean → smKorean
	24: 29, // langLithuanian → smCentralEuroRoman
	25: 29, // langPolish → smCentralEuroRoman
	26: 29, // langHungarian → smCentralEuroRoman
	27: 29, // langEstonian → smCentralEuroRoman
	28: 29, // langLatvian → smCentralEuroRoman
	29: 0, // langSami → smRoman
	30: 0, // langFaroese → smRoman (modified)
	31: 4, // langFarsi → smArabic (modified)
	32: 7, // langRussian → smCyrillic
	33: 25, // langSimpChinese → smSimpChinese
	34: 0, // langFlemish → smRoman
	35: 0, // langIrishGaelic → smRoman (modified)
	36: 0, // langAlbanian → smRoman
	37: 0, // langRomanian → smRoman (modified)
	38: 29, // langCzech → smCentralEuroRoman
	39: 29, // langSlovak → smCentralEuroRoman
	40: 0, // langSlovenian → smRoman (modified)
	41: 5, // langYiddish → smHebrew
	42: 7, // langSerbian → smCyrillic
	43: 7, // langMacedonian → smCyrillic
	44: 7, // langBulgarian → smCyrillic
	45: 7, // langUkrainian → smCyrillic (modified)
	46: 7, // langByelorussian → smCyrillic
	47: 7, // langUzbek → smCyrillic
	48: 7, // langKazakh → smCyrillic
	49: 7, // langAzerbaijani → smCyrillic
	50: 4, // langAzerbaijanAr → smArabic
	51: 24, // langArmenian → smArmenian
	52: 23, // langGeorgian → smGeorgian
	53: 7, // langMoldavian → smCyrillic
	54: 7, // langKirghiz → smCyrillic
	55: 7, // langTajiki → smCyrillic
	56: 7, // langTurkmen → smCyrillic
	57: 27, // langMongolian → smMongolian
	58: 7, // langMongolianCyr → smCyrillic
	59: 4, // langPashto → smArabic
	60: 4, // langKurdish → smArabic
	61: 4, // langKashmiri → smArabic
	62: 4, // langSindhi → smArabic
	63: 26, // langTibetan → smTibetan
	64: 9, // langNepali → smDevanagari
	65: 9, // langSanskrit → smDevanagari
	66: 9, // langMarathi → smDevanagari
	67: 13, // langBengali → smBengali
	68: 13, // langAssamese → smBengali
	69: 11, // langGujarati → smGujarati
	70: 10, // langPunjabi → smGurmukhi
	71: 12, // langOriya → smOriya
	72: 17, // langMalayalam → smMalayalam
	73: 16, // langKannada → smKannada
	74: 14, // langTamil → smTamil
	75: 15, // langTelugu → smTelugu
	76: 18, // langSinhalese → smSinhalese
	77: 19, // langBurmese → smBurmese
	78: 20, // langKhmer → smKhmer
	79: 22, // langLao → smLao
	80: 30, // langVietnamese → smVietnamese
	81: 0, // langIndonesian → smRoman
	82: 0, // langTagalog → smRoman
	83: 0, // langMalayRoman → smRoman
	84: 4, // langMalayArabic → smArabic
	85: 28, // langAmharic → smEthiopic
	86: 28, // langTigrinya → smEthiopic
	87: 28, // langOromo → smEthiopic
	88: 0, // langSomali → smRoman
	89: 0, // langSwahili → smRoman
	90: 0, // langKinyarwanda → smRoman
	91: 0, // langRundi → smRoman
	92: 0, // langNyanja → smRoman
	93: 0, // langMalagasy → smRoman
	94: 0, // langEsperanto → smRoman
	128: 0, // langWelsh → smRoman (modified)
	129: 0, // langBasque → smRoman
	130: 0, // langCatalan → smRoman
	131: 0, // langLatin → smRoman
	132: 0, // langQuechua → smRoman
	133: 0, // langGuarani → smRoman
	134: 0, // langAymara → smRoman
	135: 7, // langTatar → smCyrillic
	136: 4, // langUighur → smArabic
	137: 26, // langDzongkha → smTibetan
	138: 0, // langJavaneseRom → smRoman
	139: 0, // langSundaneseRom → smRoman
	140: 0, // langGalician → smRoman
	141: 0, // langAfrikaans → smRoman
	142: 0, // langBreton → smRoman (modified)
	143: 28, // langInuktitut → smEthiopic (modified)
	144: 0, // langScottishGaelic → smRoman (modified)
	145: 0, // langManxGaelic → smRoman (modified)
	146: 0, // langIrishGaelicScript → smRoman (modified)
	147: 0, // langTongan → smRoman
	148: 6, // langGreekAncient → smRoman
	149: 0, // langGreenlandic → smRoman
	150: 0, // langAzerbaijanRoman → smRoman
	151: 0, // langNynorsk → smRoman
};

function getEncoding(platformID, encodingID, languageID) {
	switch (platformID) {
	case 0: // Unicode
		return utf16;

	case 1: // Apple Macintosh
		return macLanguageEncodings[languageID] || macScriptEncodings[encodingID];

	case 3: // Microsoft Windows
		if (encodingID === 1 || encodingID === 10) {
			return utf16;
		}
		break;
	default:
		break;
	}

	return undefined;
}

function reverseDict(dict) {
	const result = {};

	_forOwn(dict, (value, key) => {
		result[value] = parseInt(key, 10);
	});

	return result;
}

function makeNameRecord(
	platformID,
	encodingID,
	languageID,
	nameID,
	length,
	offset,
) {
	return buildTableObj('NameRecord', [
		{name: 'platformID', type: 'USHORT', value: platformID},
		{name: 'encodingID', type: 'USHORT', value: encodingID},
		{name: 'languageID', type: 'USHORT', value: languageID},
		{name: 'nameID', type: 'USHORT', value: nameID},
		{name: 'length', type: 'USHORT', value: length},
		{name: 'offset', type: 'USHORT', value: offset},
	]);
}

// NameIDs for the name table.
const nameTableNames = [
	'copyright', // 0
	'fontFamily', // 1
	'fontSubfamily', // 2
	'uniqueID', // 3
	'fullName', // 4
	'version', // 5
	'postScriptName', // 6
	'trademark', // 7
	'manufacturer', // 8
	'designer', // 9
	'description', // 10
	'manufacturerURL', // 11
	'designerURL', // 12
	'license', // 13
	'licenseURL', // 14
	'reserved', // 15
	'preferredFamily', // 16
	'preferredSubfamily', // 17
	'compatibleFullName', // 18
	'sampleText', // 19
	'postScriptFindFontName', // 20
	'wwsFamily', // 21
	'wwsSubfamily', // 22
];

// Finds the position of needle in haystack, or -1 if not there.
// Like String.indexOf(), but for arrays.
function findSubArray(needle, haystack) {
	const needleLength = needle.length;
	const limit = haystack.length - needleLength + 1;

	/* eslint-disable no-restricted-syntax, max-depth, no-continue, no-labels */
	loop: for (let pos = 0; pos < limit; pos++) {
		for (; pos < limit; pos++) {
			for (let k = 0; k < needleLength; k++) {
				if (haystack[pos + k] !== needle[k]) {
					continue loop;
				}
			}

			return pos;
		}
	}
	/* eslint-enable */

	return -1;
}

function addStringToPool(s, pool) {
	let offset = findSubArray(s, pool);

	if (offset < 0) {
		offset = pool.length;
		for (let i = 0; i < s.length; i++) {
			pool.push(s[i]);
		}
	}

	return offset;
}

export class name {
	static make(names, ltag) {
		let nameID;
		const nameIDs = [];
		const namesWithNumericKeys = {};
		const nameTableIds = reverseDict(nameTableNames);

		_forOwn(names, (value, key) => {
			if (value !== undefined) {
				let id = nameTableIds[key];

				if (id === undefined) {
					id = key;
				}

				nameID = parseInt(id, 10);

				if (isNaN(nameID)) {
					throw new Error(
						`Name table entry "${key}" does not exist, see nameTableNames for complete list.`,
					);
				}

				namesWithNumericKeys[nameID] = names[key];
				nameIDs.push(nameID);
			}
		});

		const macLanguageIds = reverseDict(macLanguages);
		const windowsLanguageIds = reverseDict(windowsLanguages);
		const nameRecords = [];
		const stringPool = [];

		for (let i = 0; i < nameIDs.length; i++) {
			nameID = nameIDs[i];
			const translations = namesWithNumericKeys[nameID];

			_forOwn(translations, (text, lang) => {
				// eslint-disable-line no-loop-func
				// For MacOS, we try to emit the name in the form that was introduced
				// in the initial version of the TrueType spec (in the late 1980s).
				// However, this can fail for various reasons: the requested BCP 47
				// language code might not have an old-style Mac equivalent;
				// we might not have a codec for the needed character encoding;
				// or the name might contain characters that cannot be expressed
				// in the old-style Macintosh encoding. In case of failure, we emit
				// the name in a more modern fashion (Unicode encoding with BCP 47
				// language tags) that is recognized by MacOS 10.5, released in 2009.
				// If fonts were only read by operating systems, we could simply
				// emit all names in the modern form; this would be much easier.
				// However, there are many applications and libraries that read
				// 'name' tables directly, and these will usually only recognize
				// the ancient form (silently skipping the unrecognized names).
				let macPlatform = 1; // Macintosh
				let macLanguage = macLanguageIds[lang];
				let macScript = macLanguageToScript[macLanguage];
				const macEncoding = getEncoding(macPlatform, macScript, macLanguage);
				let macName = encode.MACSTRING(text, macEncoding);

				if (macName === undefined) {
					macPlatform = 0; // Unicode
					macLanguage = ltag.indexOf(lang);
					if (macLanguage < 0) {
						macLanguage = ltag.length;
						ltag.push(lang);
					}

					macScript = 4; // Unicode 2.0 and later
					macName = encode.UTF16(text);
				}

				const macNameOffset = addStringToPool(macName, stringPool);

				nameRecords.push(
					makeNameRecord(
						macPlatform,
						macScript,
						macLanguage,
						nameID,
						macName.length,
						macNameOffset,
					),
				);

				const winLanguage = windowsLanguageIds[lang];

				if (winLanguage !== undefined) {
					const winName = encode.UTF16(text);
					const winNameOffset = addStringToPool(winName, stringPool);

					nameRecords.push(
						makeNameRecord(
							3,
							1,
							winLanguage,
							nameID,
							winName.length,
							winNameOffset,
						),
					);
				}
			});
		}

		nameRecords.sort(
			(a, b) =>
				a.platformID - b.platformID
				|| a.encodingID - b.encodingID
				|| a.languageID - b.languageID
				|| a.nameID - b.nameID,
		);

		const t = buildTableObj('name', [
			{name: 'format', type: 'USHORT', value: 0},
			{name: 'count', type: 'USHORT', value: nameRecords.length},
			{
				name: 'stringOffset',
				type: 'USHORT',
				value: 6 + nameRecords.length * 12,
			},
		]);

		for (let r = 0; r < nameRecords.length; r++) {
			t.fields.push({
				name: `record_${r}`,
				type: 'RECORD',
				value: nameRecords[r],
			});
		}

		t.fields.push({name: 'strings', type: 'LITERAL', value: stringPool});
		return t;
	}
}

export class ltag {
	static make(tags) {
		const result = buildTableObj('ltag', [
			{name: 'version', type: 'ULONG', value: 1},
			{name: 'flags', type: 'ULONG', value: 0},
			{name: 'numTags', type: 'ULONG', value: tags.length},
		]);

		let stringPool = '';
		const stringPoolOffset = 12 + tags.length * 4;

		for (let i = 0; i < tags.length; i++) {
			let pos = stringPool.indexOf(tags[i]);

			if (pos < 0) {
				pos = stringPool.length;
				stringPool += tags[i];
			}

			result.fields.push({
				name: `offset ${i}`,
				type: 'USHORT',
				value: stringPoolOffset + pos,
			});
			result.fields.push({
				name: `length ${i}`,
				type: 'USHORT',
				value: tags[i].length,
			});
		}

		result.fields.push({
			name: 'stringPool',
			type: 'CHARARRAY',
			value: stringPool,
		});

		return result;
	}
}

export class post {
	static make() {
		return buildTableObj('post', [
			{name: 'version', type: 'FIXED', value: 0x00030000},
			{name: 'italicAngle', type: 'FIXED', value: 0},
			{name: 'underlinePosition', type: 'FWORD', value: 0},
			{name: 'underlineThickness', type: 'FWORD', value: 0},
			{name: 'isFixedPitch', type: 'ULONG', value: 0},
			{name: 'minMemType42', type: 'ULONG', value: 0},
			{name: 'maxMemType42', type: 'ULONG', value: 0},
			{name: 'minMemType1', type: 'ULONG', value: 0},
			{name: 'maxMemType1', type: 'ULONG', value: 0},
		]);
	}
}

const cffStandardStrings = [
	'.notdef',
	'space',
	'exclam',
	'quotedbl',
	'numbersign',
	'dollar',
	'percent',
	'ampersand',
	'quoteright',
	'parenleft',
	'parenright',
	'asterisk',
	'plus',
	'comma',
	'hyphen',
	'period',
	'slash',
	'zero',
	'one',
	'two',
	'three',
	'four',
	'five',
	'six',
	'seven',
	'eight',
	'nine',
	'colon',
	'semicolon',
	'less',
	'equal',
	'greater',
	'question',
	'at',
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
	'bracketleft',
	'backslash',
	'bracketright',
	'asciicircum',
	'underscore',
	'quoteleft',
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
	'braceleft',
	'bar',
	'braceright',
	'asciitilde',
	'exclamdown',
	'cent',
	'sterling',
	'fraction',
	'yen',
	'florin',
	'section',
	'currency',
	'quotesingle',
	'quotedblleft',
	'guillemotleft',
	'guilsinglleft',
	'guilsinglright',
	'fi',
	'fl',
	'endash',
	'dagger',
	'daggerdbl',
	'periodcentered',
	'paragraph',
	'bullet',
	'quotesinglbase',
	'quotedblbase',
	'quotedblright',
	'guillemotright',
	'ellipsis',
	'perthousand',
	'questiondown',
	'grave',
	'acute',
	'circumflex',
	'tilde',
	'macron',
	'breve',
	'dotaccent',
	'dieresis',
	'ring',
	'cedilla',
	'hungarumlaut',
	'ogonek',
	'caron',
	'emdash',
	'AE',
	'ordfeminine',
	'Lslash',
	'Oslash',
	'OE',
	'ordmasculine',
	'ae',
	'dotlessi',
	'lslash',
	'oslash',
	'oe',
	'germandbls',
	'onesuperior',
	'logicalnot',
	'mu',
	'trademark',
	'Eth',
	'onehalf',
	'plusminus',
	'Thorn',
	'onequarter',
	'divide',
	'brokenbar',
	'degree',
	'thorn',
	'threequarters',
	'twosuperior',
	'registered',
	'minus',
	'eth',
	'multiply',
	'threesuperior',
	'copyright',
	'Aacute',
	'Acircumflex',
	'Adieresis',
	'Agrave',
	'Aring',
	'Atilde',
	'Ccedilla',
	'Eacute',
	'Ecircumflex',
	'Edieresis',
	'Egrave',
	'Iacute',
	'Icircumflex',
	'Idieresis',
	'Igrave',
	'Ntilde',
	'Oacute',
	'Ocircumflex',
	'Odieresis',
	'Ograve',
	'Otilde',
	'Scaron',
	'Uacute',
	'Ucircumflex',
	'Udieresis',
	'Ugrave',
	'Yacute',
	'Ydieresis',
	'Zcaron',
	'aacute',
	'acircumflex',
	'adieresis',
	'agrave',
	'aring',
	'atilde',
	'ccedilla',
	'eacute',
	'ecircumflex',
	'edieresis',
	'egrave',
	'iacute',
	'icircumflex',
	'idieresis',
	'igrave',
	'ntilde',
	'oacute',
	'ocircumflex',
	'odieresis',
	'ograve',
	'otilde',
	'scaron',
	'uacute',
	'ucircumflex',
	'udieresis',
	'ugrave',
	'yacute',
	'ydieresis',
	'zcaron',
	'exclamsmall',
	'Hungarumlautsmall',
	'dollaroldstyle',
	'dollarsuperior',
	'ampersandsmall',
	'Acutesmall',
	'parenleftsuperior',
	'parenrightsuperior',
	'266 ff',
	'onedotenleader',
	'zerooldstyle',
	'oneoldstyle',
	'twooldstyle',
	'threeoldstyle',
	'fouroldstyle',
	'fiveoldstyle',
	'sixoldstyle',
	'sevenoldstyle',
	'eightoldstyle',
	'nineoldstyle',
	'commasuperior',
	'threequartersemdash',
	'periodsuperior',
	'questionsmall',
	'asuperior',
	'bsuperior',
	'centsuperior',
	'dsuperior',
	'esuperior',
	'isuperior',
	'lsuperior',
	'msuperior',
	'nsuperior',
	'osuperior',
	'rsuperior',
	'ssuperior',
	'tsuperior',
	'ff',
	'ffi',
	'ffl',
	'parenleftinferior',
	'parenrightinferior',
	'Circumflexsmall',
	'hyphensuperior',
	'Gravesmall',
	'Asmall',
	'Bsmall',
	'Csmall',
	'Dsmall',
	'Esmall',
	'Fsmall',
	'Gsmall',
	'Hsmall',
	'Ismall',
	'Jsmall',
	'Ksmall',
	'Lsmall',
	'Msmall',
	'Nsmall',
	'Osmall',
	'Psmall',
	'Qsmall',
	'Rsmall',
	'Ssmall',
	'Tsmall',
	'Usmall',
	'Vsmall',
	'Wsmall',
	'Xsmall',
	'Ysmall',
	'Zsmall',
	'colonmonetary',
	'onefitted',
	'rupiah',
	'Tildesmall',
	'exclamdownsmall',
	'centoldstyle',
	'Lslashsmall',
	'Scaronsmall',
	'Zcaronsmall',
	'Dieresissmall',
	'Brevesmall',
	'Caronsmall',
	'Dotaccentsmall',
	'Macronsmall',
	'figuredash',
	'hypheninferior',
	'Ogoneksmall',
	'Ringsmall',
	'Cedillasmall',
	'questiondownsmall',
	'oneeighth',
	'threeeighths',
	'fiveeighths',
	'seveneighths',
	'onethird',
	'twothirds',
	'zerosuperior',
	'foursuperior',
	'fivesuperior',
	'sixsuperior',
	'sevensuperior',
	'eightsuperior',
	'ninesuperior',
	'zeroinferior',
	'oneinferior',
	'twoinferior',
	'threeinferior',
	'fourinferior',
	'fiveinferior',
	'sixinferior',
	'seveninferior',
	'eightinferior',
	'nineinferior',
	'centinferior',
	'dollarinferior',
	'periodinferior',
	'commainferior',
	'Agravesmall',
	'Aacutesmall',
	'Acircumflexsmall',
	'Atildesmall',
	'Adieresissmall',
	'Aringsmall',
	'AEsmall',
	'Ccedillasmall',
	'Egravesmall',
	'Eacutesmall',
	'Ecircumflexsmall',
	'Edieresissmall',
	'Igravesmall',
	'Iacutesmall',
	'Icircumflexsmall',
	'Idieresissmall',
	'Ethsmall',
	'Ntildesmall',
	'Ogravesmall',
	'Oacutesmall',
	'Ocircumflexsmall',
	'Otildesmall',
	'Odieresissmall',
	'OEsmall',
	'Oslashsmall',
	'Ugravesmall',
	'Uacutesmall',
	'Ucircumflexsmall',
	'Udieresissmall',
	'Yacutesmall',
	'Thornsmall',
	'Ydieresissmall',
	'001.000',
	'001.001',
	'001.002',
	'001.003',
	'Black',
	'Bold',
	'Book',
	'Light',
	'Medium',
	'Regular',
	'Roman',
	'Semibold',
];

const TOP_DICT_META = [
	{name: 'version', op: 0, type: 'SID'},
	{name: 'notice', op: 1, type: 'SID'},
	{name: 'copyright', op: 1200, type: 'SID'},
	{name: 'fullName', op: 2, type: 'SID'},
	{name: 'familyName', op: 3, type: 'SID'},
	{name: 'weight', op: 4, type: 'SID'},
	{
		name: 'isFixedPitch',
		op: 1201,
		type: 'number',
		value: 0,
	},
	{
		name: 'italicAngle',
		op: 1202,
		type: 'number',
		value: 0,
	},
	{
		name: 'underlinePosition',
		op: 1203,
		type: 'number',
		value: -100,
	},
	{
		name: 'underlineThickness',
		op: 1204,
		type: 'number',
		value: 50,
	},
	{
		name: 'paintType',
		op: 1205,
		type: 'number',
		value: 0,
	},
	{
		name: 'charstringType',
		op: 1206,
		type: 'number',
		value: 2,
	},
	{
		name: 'fontMatrix',
		op: 1207,
		type: ['real', 'real', 'real', 'real', 'real', 'real'],
		value: [0.001, 0, 0, 0.001, 0, 0],
	},
	{name: 'uniqueId', op: 13, type: 'number'},
	{
		name: 'fontBBox',
		op: 5,
		type: ['number', 'number', 'number', 'number'],
		value: [0, 0, 0, 0],
	},
	{
		name: 'strokeWidth',
		op: 1208,
		type: 'number',
		value: 0,
	},
	{
		name: 'xuid',
		op: 14,
		type: [],
		value: null,
	},
	{
		name: 'charset',
		op: 15,
		type: 'offset',
		value: 0,
	},
	{
		name: 'encoding',
		op: 16,
		type: 'offset',
		value: 0,
	},
	{
		name: 'charStrings',
		op: 17,
		type: 'offset',
		value: 0,
	},
	{
		name: 'private',
		op: 18,
		type: ['number', 'offset'],
		value: [0, 0],
	},
];

const PRIVATE_DICT_META = [
	{
		name: 'subrs',
		op: 19,
		type: 'offset',
		value: 0,
	},
	{
		name: 'defaultWidthX',
		op: 20,
		type: 'number',
		value: 0,
	},
	{
		name: 'nominalWidthX',
		op: 21,
		type: 'number',
		value: 0,
	},
];

function makeCffHeader() {
	return buildTableObj('Header', [
		{name: 'major', type: 'Card8', value: 1},
		{name: 'minor', type: 'Card8', value: 0},
		{name: 'hdrSize', type: 'Card8', value: 4},
		{name: 'major', type: 'Card8', value: 1},
	]);
}

function makeNameIndex(fontNames) {
	const t = buildTableObj('Name INDEX', [
		{name: 'names', type: 'INDEX', value: []},
	]);

	t.names = [];
	for (let i = 0; i < fontNames.length; i++) {
		t.names.push({name: `name_${i}`, type: 'NAME', value: fontNames[i]});
	}

	return t;
}

// Custom equals function that can also check lists.
function equals(a, b) {
	if (a === b) {
		return true;
	}
	else if (Array.isArray(a) && Array.isArray(b)) {
		if (a.length !== b.length) {
			return false;
		}

		for (let i = 0; i < a.length; i++) {
			if (!equals(a[i], b[i])) {
				return false;
			}
		}

		return true;
	}

	return false;
}

// Convert a string to a String ID (SID).
// The list of strings is modified in place.
function encodeString(s, strings) {
	let sid;

	// Is the string in the CFF standard strings?
	let i = cffStandardStrings.indexOf(s);

	if (i >= 0) {
		sid = i;
	}

	// Is the string already in the string index?
	i = strings.indexOf(s);
	if (i >= 0) {
		sid = i + cffStandardStrings.length;
	}
	else {
		sid = cffStandardStrings.length + strings.length;
		strings.push(s);
	}

	return sid;
}

// Given a dictionary's metadata, create a DICT structure.
function makeDict(meta, attrs, strings) {
	const m = {};

	for (let i = 0; i < meta.length; i++) {
		const entry = meta[i];
		let value = attrs[entry.name];

		if (value !== undefined && !equals(value, entry.value)) {
			if (entry.type === 'SID') {
				value = encodeString(value, strings);
			}

			m[entry.op] = {name: entry.name, type: entry.type, value};
		}
	}

	return m;
}

// The Top DICT houses the global font attributes.
function makeTopDict(attrs, strings) {
	const t = buildTableObj('Top DICT', [
		{name: 'dict', type: 'DICT', value: {}},
	]);

	t.dict = makeDict(TOP_DICT_META, attrs, strings);
	return t;
}

function makeTopDictIndex(topDict) {
	const t = buildTableObj('Top DICT INDEX', [
		{name: 'topDicts', type: 'INDEX', value: []},
	]);

	t.topDicts = [{name: 'topDict_0', type: 'TABLE', value: topDict}];
	return t;
}

function makeStringIndex(strings) {
	const t = buildTableObj('String INDEX', [
		{name: 'strings', type: 'INDEX', value: []},
	]);

	t.strings = [];
	for (let i = 0; i < strings.length; i++) {
		t.strings.push({name: `string_${i}`, type: 'STRING', value: strings[i]});
	}

	return t;
}

function makeGlobalSubrIndex() {
	// Currently we don't use subroutines.
	return buildTableObj('Global Subr INDEX', [
		{name: 'subrs', type: 'INDEX', value: []},
	]);
}

function makeCharsets(glyphNames, strings) {
	const t = buildTableObj('Charsets', [
		{name: 'format', type: 'Card8', value: 0},
	]);

	for (let i = 0; i < glyphNames.length; i++) {
		const glyphName = glyphNames[i];
		const glyphSID = encodeString(glyphName, strings);

		t.fields.push({name: `glyph_${i}`, type: 'SID', value: glyphSID});
	}

	return t;
}

// TODO(franz): does not work like that anymore
function glyphToOps(glyph) {
	const ops = [];
	let x = 0;
	let y = 0;

	ops.push({name: 'width', type: 'NUMBER', value: glyph.advanceWidth});

	for (let i = 0; i < glyph.otContours.length; i++) {
		let dx;
		let dy;
		const contour = glyph.otContours[i];

		for (let j = 0; j < contour.length; j++) {
			const bezier = contour[j];

			if (j === 0) {
				dx = Math.round(bezier[0].x - x);
				dy = Math.round(bezier[0].y - y);
				ops.push({name: 'dx', type: 'NUMBER', value: dx});
				ops.push({name: 'dy', type: 'NUMBER', value: dy});
				ops.push({name: 'rmoveto', type: 'OP', value: 21});
				x = Math.round(bezier[0].x);
				y = Math.round(bezier[0].y);
			}

			const dx1 = Math.round(bezier[1].x - x);
			const dy1 = Math.round(bezier[1].y - y);
			const dx2 = Math.round(bezier[2].x - bezier[1].x);
			const dy2 = Math.round(bezier[2].y - bezier[1].y);

			dx = Math.round(bezier[3].x - bezier[2].x);
			dy = Math.round(bezier[3].y - bezier[2].y);
			ops.push({name: 'dx1', type: 'NUMBER', value: dx1});
			ops.push({name: 'dy1', type: 'NUMBER', value: dy1});
			ops.push({name: 'dx2', type: 'NUMBER', value: dx2});
			ops.push({name: 'dy2', type: 'NUMBER', value: dy2});
			ops.push({name: 'dx', type: 'NUMBER', value: dx});
			ops.push({name: 'dy', type: 'NUMBER', value: dy});
			ops.push({name: 'rrcurveto', type: 'OP', value: 8});
			x = Math.round(bezier[3].x);
			y = Math.round(bezier[3].y);
			// Contours are closed automatically.
		}
	}

	ops.push({name: 'endchar', type: 'OP', value: 14});
	return ops;
}

function makeCharStringsIndex(glyphs) {
	const t = buildTableObj('CharStrings INDEX', [
		{name: 'charStrings', type: 'INDEX', value: []},
	]);

	for (let i = 0; i < glyphs.length; i++) {
		const glyph = glyphs[i];
		const ops = glyphToOps(glyph);

		t.charStrings.push({name: glyph.name, type: 'CHARSTRING', value: ops});
	}

	return t;
}

function makePrivateDict(attrs, strings) {
	const t = buildTableObj('Private DICT', [
		{name: 'dict', type: 'DICT', value: {}},
	]);

	t.dict = makeDict(PRIVATE_DICT_META, attrs, strings);
	return t;
}

export class cff {
	static make(glyphs, options) {
		const t = buildTableObj('CFF ', [
			{name: 'header', type: 'RECORD'},
			{name: 'nameIndex', type: 'RECORD'},
			{name: 'topDictIndex', type: 'RECORD'},
			{name: 'stringIndex', type: 'RECORD'},
			{name: 'globalSubrIndex', type: 'RECORD'},
			{name: 'charsets', type: 'RECORD'},
			{name: 'charStringsIndex', type: 'RECORD'},
			{name: 'privateDict', type: 'RECORD'},
		]);

		const fontScale = 1 / options.unitsPerEm;
		// We use non-zero values for the offsets so that the DICT encodes them.
		// This is important because the size of the Top DICT plays a role in offset calculation,
		// and the size shouldn't change after we've written correct offsets.
		const attrs = {
			version: options.version,
			fullName: options.fullName,
			familyName: options.familyName,
			weight: options.weightName,
			fontBBox: options.fontBBox || [0, 0, 0, 0],
			fontMatrix: [fontScale, 0, 0, fontScale, 0, 0],
			charset: 999,
			encoding: 0,
			charStrings: 999,
			private: [0, 999],
		};
		const privateAttrs = {};
		const glyphNames = [];

		// Skip first glyph (.notdef)
		for (let i = 1; i < glyphs.length; i++) {
			const glyph = glyphs[i];

			glyphNames.push(glyph.name);
		}

		const strings = [];
		const topDict = makeTopDict(attrs, strings);

		t.header = makeCffHeader();
		t.nameIndex = makeNameIndex([options.postScriptName]);
		t.topDictIndex = makeTopDictIndex(topDict);
		t.globalSubrIndex = makeGlobalSubrIndex();
		t.charsets = makeCharsets(glyphNames, strings);
		t.charStringsIndex = makeCharStringsIndex(glyphs);
		t.privateDict = makePrivateDict(privateAttrs, strings);

		// Needs to come at the end, to encode all custom strings used in the font.
		t.stringIndex = makeStringIndex(strings);

		const startOffset
			= sizeOfTable(t.header)
			+ sizeOfTable(t.nameIndex)
			+ sizeOfTable(t.topDictIndex)
			+ sizeOfTable(t.stringIndex)
			+ sizeOfTable(t.globalSubrIndex);

		attrs.charset = startOffset;

		// We use the CFF standard encoding; proper encoding will be handled in cmap.
		attrs.encoding = 0;
		attrs.charStrings = attrs.charset + sizeOfTable(t.charsets);
		attrs.private[1] = attrs.charStrings + sizeOfTable(t.charStringsIndex);

		// Recreate the Top DICT INDEX with the correct offsets.
		const topDictWithAttrs = makeTopDict(attrs, strings);

		t.topDictIndex = makeTopDictIndex(topDictWithAttrs);

		return t;
	}
}

function makeGposHeader() {
	return buildTableObj('Header', [
		{name: 'majorVersion', type: 'UINT16', value: 1},
		{name: 'minorersion', type: 'UINT16', value: 1},
		{name: 'scriptListOffset', type: 'Offset16', value: 10},
		{name: 'featureListOffset', type: 'Offset16', value: undefined},
		{name: 'lookupListOffset', type: 'Offset16', value: undefined},
		{name: 'featureVariations', type: 'Offset32', value: 0},
	]);
}

function makeLanguageSystemTable(lang) {
	const t = buildTableObj('langSysTable', [
		{name: 'lookupOrder', type: 'Offset16', value: 0},
		{
			name: 'requiredFeatureIndex',
			type: 'UINT16',
			value: lang.requiredFeatureIndex,
		},
		{name: 'featureIndexCount', type: 'UINT16', value: lang.featIndexes.length},
		{name: 'featureIndices', type: 'ARRAY'},
	]);

	lang.featIndexes.forEach((feat, i) => {
		t.featureIndices.push({
			name: `featureIndex[${i}]`,
			type: 'UINT16',
			value: feat,
		});
	});
}

function makeLangSysRecords(lang, idx, offset) {
	const t = buildTableObj(`langSysRecord[${idx}]`, [
		{name: 'langSysTag', type: 'Tag', value: lang.id},
		{name: 'langSysOffset', type: 'Offset16', value: offset},
	]);

	return t;
}

function makeScriptTable({defaultLang, all}) {
	let offset = 4 + all.length * 6;

	const t = buildTableObj('scriptTable', [
		{name: 'defaultLangSys', type: 'Offset16', value: offset},
		{name: 'langSysCount', type: 'UINT16', value: all.length},
		{name: 'langSysRecords', type: 'ARRAY'},
		{name: 'languageSystemTables', type: 'ARRAY'},
	]);

	t.langSysRecords = [];
	t.langSystemTables = [];

	const defaultLangSys = makeLanguageSystemTable(defaultLang, offset);

	offset += sizeOf.TABLE(defaultLangSys);
	t.langSystemTables.push(defaultLangSys);

	all.forEach((language) => {
		t.langSysRecords.push(makeLangSysRecords(language, offset));
		const langSysTable = makeLanguageSystemTable(language);

		offset += sizeOf.TABLE(langSysTable);
		t.languageSystemTables.push(langSysTable);
	});

	return t;
}

function makeScriptRecord(tag, idx = 0, offset) {
	const t = buildTableObj(`scriptRecords[${idx}]`, [
		{name: 'scriptTag', type: 'Tag', value: tag},
		{name: 'scriptOffset', type: 'Offset16'},
	]);

	t.scriptOffset = offset;

	return t;
}

/* Options layout
 * {
 *	scriptList: [
 *		{
 *			tag: 'latn',
 *			languages: {
 *				defaultLang:{
 *					id: 'DFLT', Default Language is required !!!!
 *					requiredFeatureIndex: 0,
 *					featureIndexes: [1, 2, 3...]
 *				},
 *				all: [
 *					{
 *						id: 'ROM',
 *						requiredFeatureIndex: 0xFFFF, //no required feat
 *						featureIndexes: [1, 2, 3...]
 *					},
 *				]
 *			],
 *		}
 *	]
 * }
 */

export class gpos {
	static make(options = {}) {
		const scripts = options.scripts || ['latn'];
		const t = buildTableObj('GPOS ', [
			{name: 'header', type: 'RECORD'},
			{name: 'scriptList', type: 'RECORD'},
			{name: 'featureList', type: 'RECORD'},
			{name: 'lookupList', type: 'RECORD'},
			{name: 'featureVariations', type: 'RECORD'},
		]);

		t.header = makeGposHeader();
		t.scriptList = buildTableObj('ScriptListTable', [
			{name: 'scriptCount', type: 'UINT16', value: scriptList.length},
			{name: 'scriptRecords', type: 'ARRAY'},
			{name: 'scriptTables', type: 'ARRAY'},
		]);

		t.scriptList.scriptRecords = [];
		t.scriptList.scriptTables = [];
		let offset = options.scriptList.length * 6 + 2;

		options.scriptList.forEach((script, i) => {
			t.scriptRecords.push(makeScriptRecord(script.tag, i, offset));
			const scriptTable = makeScriptTable(script.languages);

			offset += sizeOf.TABLE(scriptTable);
			t.scriptList.scriptTables.push(scriptTable);
		});
	}
}
/* eslint-enable babel/new-cap */
