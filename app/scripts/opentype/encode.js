import memoize from 'memoize-immutable';

import _forOwn from 'lodash/forOwn';
import {checkArgument} from './check';

const LIMIT16 = 32768;
const LIMIT32 = 2147483648; // The limit at which a 32-bit number switches signs == 2 ^ 31

function constant(v) {
	return () => v;
}

export const encode = {};
export const sizeOf = {};
export const print = {};

/* eslint-disable babel/new-cap, no-bitwise, no-param-reassign */
encode.BYTE = (v) => {
	checkArgument(v >= 0 && v <= 255, 'Byte value should be between 0 and 255.');
	return [v];
};

sizeOf.BYTE = constant(1);

encode.CHAR = v => [v.charCodeAt(0)];

sizeOf.CHAR = constant(1);

encode.CHARARRAY = (v) => {
	const b = [];

	for (let i = 0; i < v.length; i += 1) {
		b[i] = v.charCodeAt(i);
	}

	return b;
};

sizeOf.CHARARRAY = v => v.length;

encode.USHORT = v => [(v >> 8) & 0xff, v & 0xff];

sizeOf.USHORT = constant(2);

encode.SHORT = (v) => {
	// Two's complement
	if (v >= LIMIT16) {
		v = -(2 * LIMIT16 - v);
	}

	return [(v >> 8) & 0xff, v & 0xff];
};

sizeOf.SHORT = constant(2);

encode.UINT16 = encode.SHORT;
sizeOf.UINT16 = sizeOf.SHORT;

encode.Offset16 = encode.SHORT;
sizeOf.Offset16 = sizeOf.SHORT;

encode.UINT24 = v => [(v >> 16) & 0xff, (v >> 8) & 0xff, v & 0xff];

sizeOf.UINT24 = constant(3);

encode.ULONG = v => [
	(v >> 24) & 0xff,
	(v >> 16) & 0xff,
	(v >> 8) & 0xff,
	v & 0xff,
];

sizeOf.ULONG = constant(4);

encode.LONG = (v) => {
	// Two's complement
	if (v >= LIMIT32) {
		v = -(2 * LIMIT32 - v);
	}

	return [(v >> 24) & 0xff, (v >> 16) & 0xff, (v >> 8) & 0xff, v & 0xff];
};

sizeOf.LONG = constant(4);

encode.FIXED = encode.ULONG;
sizeOf.FIXED = sizeOf.ULONG;

encode.FWORD = encode.SHORT;
sizeOf.FWORD = sizeOf.SHORT;

encode.UFWORD = encode.USHORT;
sizeOf.UFWORD = sizeOf.USHORT;

encode.LONGDATETIME = v => [
	0,
	0,
	0,
	0,
	(v >> 24) & 0xff,
	(v >> 16) & 0xff,
	(v >> 8) & 0xff,
	v & 0xff,
]; // eslint-disable-line max-len

sizeOf.LONGDATETIME = constant(8);

encode.TAG = (v) => {
	checkArgument(v.length === 4, 'Tag should be exactly 4 ASCII characters.');
	return [v.charCodeAt(0), v.charCodeAt(1), v.charCodeAt(2), v.charCodeAt(3)];
};

sizeOf.TAG = constant(4);

encode.Card8 = encode.BYTE;
sizeOf.Card8 = sizeOf.BYTE;

encode.Card16 = encode.USHORT;
sizeOf.Card16 = sizeOf.USHORT;

encode.OffSize = encode.BYTE;
sizeOf.OffSize = sizeOf.BYTE;

encode.SID = encode.USHORT;
sizeOf.SID = sizeOf.USHORT;

encode.NUMBER = (v) => {
	if (v >= -107 && v <= 107) {
		return [v + 139];
	}
	else if (v >= 108 && v <= 1131) {
		const val = v - 108;

		return [(val >> 8) + 247, val & 0xff];
	}
	else if (v >= -1131 && v <= -108) {
		const val = -v - 108;

		return [(val >> 8) + 251, val & 0xff];
	}
	else if (v >= -32768 && v <= 32767) {
		return encode.NUMBER16(v);
	}

	return encode.NUMBER32(v);
};

sizeOf.NUMBER = v => encode.NUMBER(v).length;

encode.NUMBER16 = v => [28, (v >> 8) & 0xff, v & 0xff];

sizeOf.NUMBER16 = constant(3);

encode.NUMBER32 = v => [
	29,
	(v >> 24) & 0xff,
	(v >> 16) & 0xff,
	(v >> 8) & 0xff,
	v & 0xff,
];

sizeOf.NUMBER32 = constant(4);

encode.REAL = (v) => {
	let value = v.toString();

	// Some numbers use an epsilon to encode the value.
	// (e.g. JavaScript will store 0.0000001 as 1e-7)
	// This code converts it back to a number without the epsilon.
	const m = /\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(value);

	if (m) {
		const epsilon = parseFloat(`1e${(m[2] ? +m[2] : 0) + m[1].length}`);

		value = (Math.round(v * epsilon) / epsilon).toString();
	}

	let nibbles = '';
	let i;

	for (i = 0; i < value.length; i++) {
		const c = value[i];

		if (c === 'e') {
			nibbles += value[++i] === '-' ? 'c' : 'b';
		}
		else if (c === '.') {
			nibbles += 'a';
		}
		else if (c === '-') {
			nibbles += 'e';
		}
		else {
			nibbles += c;
		}
	}

	nibbles += nibbles.length & 1 ? 'f' : 'ff';
	const out = [30];

	for (i = 0; i < nibbles.length; i += 2) {
		out.push(parseInt(nibbles.substr(i, 2), 16));
	}

	return out;
};

sizeOf.REAL = v => encode.REAL(v).length;

encode.NAME = encode.CHARARRAY;
sizeOf.NAME = sizeOf.CHARARRAY;

encode.STRING = encode.CHARARRAY;
sizeOf.STRING = sizeOf.CHARARRAY;

encode.UTF16 = (v) => {
	const b = [];

	for (let i = 0; i < v.length; i++) {
		const codepoint = v.charCodeAt(i);

		b[b.length] = (codepoint >> 8) & 0xff;
		b[b.length] = codepoint & 0xff;
	}

	return b;
};

/**
 * @param {string}
 * @returns {number}
 */
sizeOf.UTF16 = v => v.length * 2;

const eightBitMacEncodings = {
	// Python: 'mac_croatian'
	'x-mac-croatian':
		'ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø'
		+ '¿¡¬√≈Ć«Č… ÀÃÕŒœĐ“”‘’÷◊©⁄€Æ»·„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙı¯πË˚¸Êæˇ',
	// Python: 'mac_cyrillic'
	'x-mac-cyrillic':
		'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°£§¶І®©™Ђђ≠Ѓѓ∞±≤≥іµЈЄєЇїЉљЊњ'
		+ 'јЅ¬√≈∆«»… ЋћЌќѕ“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю',
	'x-mac-gaelic':
		// http://unicode.org/Public/MAPPINGS/VENDORS/APPLE/GAELIC.TXT
		'ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§¶ß®©™´¨≠ÆØḂ±≤≥ḃĊċḊḋḞḟĠġṀæø'
		+ 'ṁṖṗɼſṠ«»… ÀÃÕŒœ“”‘’ṡẛÿŸṪ€Ŷŷṫ·Ỳỳ⁊ÂÊÁËÈÍÎÏÌÓÔ♣ÒÚÛÙıÝýŴŵẄẅẀẁẂẃ',
	// Python: 'mac_greek'
	'x-mac-greek':
		'Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï½‰ôö¦€ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩ'
		+ 'άΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ\u00AD',
	// Python: 'mac_iceland'
	'x-mac-icelandic':
		'ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø'
		+ '¿¡¬√≈∆«»… ÀÃÕŒœ“”‘’÷◊ÿŸ⁄€ÐðÞþý·„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙı¯˘˙˚¸˝˛ˇ',
	'x-mac-inuit':
		// http://unicode.org/Public/MAPPINGS/VENDORS/APPLE/INUIT.TXT
		'ᐃᐄᐅᐆᐊᐋᐱᐲᐳᐴᐸᐹᑉᑎᑏᑐᑑᑕᑖᑦᑭᑮᑯᑰᑲᑳᒃᒋᒌᒍᒎᒐᒑ°ᒡᒥᒦ¶ᒧ®©™ᒨᒪᒫᒻᓂᓃᓄᓅᓇᓈᓐᓯᓰᓱᓲᓴᓵᔅᓕᓖᓗ'
		+ 'ᓘᓚᓛᓪᔨᔩᔪᔫᔭ… ᔮᔾᕕᕖᕗ“”‘’ᕘᕙᕚᕝᕆᕇᕈᕉᕋᕌᕐᕿᖀᖁᖂᖃᖄᖅᖏᖐᖑᖒᖓᖔᖕᙱᙲᙳᙴᙵᙶᖖᖠᖡᖢᖣᖤᖥᖦᕼŁł',
	// Python: 'mac_latin2'
	'x-mac-ce':
		'ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅ'
		+ 'ņŃ¬√ńŇ∆«»… ňŐÕőŌ“”‘’÷◊ōŔŕŘřŖŗŠ„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ',
	// Python: 'mac_roman'
	macintosh:
		'ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø'
		+ '¿¡¬√≈∆«»… ÀÃÕŒœ“”‘’÷◊ÿŸ⁄€ﬁﬂ‡·„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙı¯˘˙˚¸˝˛ˇ',
	// Python: 'mac_romanian'
	'x-mac-romanian':
		'ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§¶ß®©™´¨≠ĂȘ∞±≤≥¥µ∂∑∏π∫ªºΩăș'
		+ '¿¡¬√≈∆«»… ÀÃÕŒœ“”‘’÷◊ÿŸ⁄€Țț‡·„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙı¯˘˙˚¸˝˛ˇ',
	// Python: 'mac_turkish'
	'x-mac-turkish':
		'ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø'
		+ '¿¡¬√≈∆«»… ÀÃÕŒœ“”‘’÷◊ÿŸĞğİıŞş‡·„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙ¯˘˙˚¸˝˛ˇ',
};

const macEncodingTableCache = typeof WeakMap === 'function' && new WeakMap();
let macEncodingCacheKeys;
const getMacEncodingTable = (encoding) => {
	// Since we use encoding as a cache key for WeakMap, it has to be
	// a String object and not a literal. And at least on NodeJS 2.10.1,
	// WeakMap requires that the same String instance is passed for cache hits.
	if (!macEncodingCacheKeys) {
		macEncodingCacheKeys = {};

		_forOwn(eightBitMacEncodings, (value, key) => {
			/* eslint-disable no-new-wrappers */
			macEncodingCacheKeys[key] = new String(key);
			/* eslint-enable no-new-wrappers */
		});
	}

	const cacheKey = macEncodingCacheKeys[encoding];

	if (cacheKey === undefined) {
		return undefined;
	}

	// We can't do "if (cache.has(key)) {return cache.get(key)}" here:
	// since garbage collection may run at any time, it could also kick in
	// between the calls to cache.has() and cache.get(). In that case,
	// we would return 'undefined' even though we do support the encoding.
	if (macEncodingTableCache) {
		const cachedTable = macEncodingTableCache.get(cacheKey);

		if (cachedTable !== undefined) {
			return cachedTable;
		}
	}

	const decodingTable = eightBitMacEncodings[encoding];

	if (decodingTable === undefined) {
		return undefined;
	}

	const encodingTable = {};

	for (let i = 0; i < decodingTable.length; i++) {
		encodingTable[decodingTable.charCodeAt(i)] = i + 0x80;
	}

	if (macEncodingTableCache) {
		macEncodingTableCache.set(cacheKey, encodingTable);
	}

	return encodingTable;
};

encode.MACSTRING = (str, encoding) => {
	const table = getMacEncodingTable(encoding);

	if (table === undefined) {
		return undefined;
	}

	const result = [];

	for (let i = 0; i < str.length; i++) {
		let c = str.charCodeAt(i);

		// In all eight-bit Mac encodings, the characters 0x00..0x7F are
		// mapped to U+0000..U+007F; we only need to look up the others.
		if (c >= 0x80) {
			c = table[c];
			if (c === undefined) {
				// str contains a Unicode character that cannot be encoded
				// in the requested encoding.
				return undefined;
			}
		}
		result[i] = c;
		// result.push(c);
	}

	return result;
};

sizeOf.MACSTRING = (str, encoding) => {
	const b = encode.MACSTRING(str, encoding);

	if (b === undefined) {
		return 0;
	}

	return b.length;
};

// Helper for encode.VARDELTAS
function isByteEncodable(value) {
	return value >= -128 && value <= 127;
}

// Helper for encode.VARDELTAS
function encodeVarDeltaRunAsZeroes(deltas, pos, result) {
	let runLength = 0;
	const numDeltas = deltas.length;
	let position = pos;

	while (position < numDeltas && runLength < 64 && deltas[position] === 0) {
		++position;
		++runLength;
	}
	result.push(0x80 | (runLength - 1));
	return position;
}

// Helper for encode.VARDELTAS
function encodeVarDeltaRunAsBytes(deltas, offset, result) {
	let runLength = 0;
	const numDeltas = deltas.length;
	let pos = offset;

	while (pos < numDeltas && runLength < 64) {
		const value = deltas[pos];

		if (!isByteEncodable(value)) {
			break;
		}

		// Within a byte-encoded run of deltas, a single zero is best
		// stored literally as 0x00 value. However, if we have two or
		// more zeroes in a sequence, it is better to start a new run.
		// Fore example, the sequence of deltas [15, 15, 0, 15, 15]
		// becomes 6 bytes (04 0F 0F 00 0F 0F) when storing the zero
		// within the current run, but 7 bytes (01 0F 0F 80 01 0F 0F)
		// when starting a new run.
		if (value === 0 && pos + 1 < numDeltas && deltas[pos + 1] === 0) {
			break;
		}

		++pos;
		++runLength;
	}

	result.push(runLength - 1);

	for (let i = offset; i < pos; i++) {
		result.push((deltas[i] + 256) & 0xff);
	}

	return pos;
}

// Helper for encode.VARDELTAS
function encodeVarDeltaRunAsWords(deltas, offset, result) {
	let runLength = 0;
	const numDeltas = deltas.length;
	let pos = offset;

	while (pos < numDeltas && runLength < 64) {
		const value = deltas[pos];

		// Within a word-encoded run of deltas, it is easiest to start
		// a new run (with a different encoding) whenever we encounter
		// a zero value. For example, the sequence [0x6666, 0, 0x7777]
		// needs 7 bytes when storing the zero inside the current run
		// (42 66 66 00 00 77 77), and equally 7 bytes when starting a
		// new run (40 66 66 80 40 77 77).
		if (value === 0) {
			break;
		}

		// Within a word-encoded run of deltas, a single value in the
		// range (-128..127) should be encoded within the current run
		// because it is more compact. For example, the sequence
		// [0x6666, 2, 0x7777] becomes 7 bytes when storing the value
		// literally (42 66 66 00 02 77 77), but 8 bytes when starting
		// a new run (40 66 66 00 02 40 77 77).
		if (
			isByteEncodable(value)
			&& pos + 1 < numDeltas
			&& isByteEncodable(deltas[pos + 1])
		) {
			break;
		}

		++pos;
		++runLength;
	}

	result.push(0x40 | (runLength - 1));

	for (let i = offset; i < pos; i++) {
		const val = deltas[i];

		result.push(((val + 0x10000) >> 8) & 0xff, (val + 0x100) & 0xff);
	}

	return pos;
}

/**
 * Encode a list of variation adjustment deltas.
 *
 * Variation adjustment deltas are used in ‘gvar’ and ‘cvar’ tables.
 * They indicate how points (in ‘gvar’) or values (in ‘cvar’) get adjusted
 * when generating instances of variation fonts.
 *
 * @see https://www.microsoft.com/typography/otspec/gvar.htm
 * @see https://developer.apple.com/fonts/TrueType-Reference-Manual/RM06/Chap6gvar.html
 * @param {Array}
 * @return {Array}
 */
encode.VARDELTAS = (deltas) => {
	let pos = 0;
	const result = [];

	while (pos < deltas.length) {
		const value = deltas[pos];

		if (value === 0) {
			pos = encodeVarDeltaRunAsZeroes(deltas, pos, result);
		}
		else if (value >= -128 && value <= 127) {
			pos = encodeVarDeltaRunAsBytes(deltas, pos, result);
		}
		else {
			pos = encodeVarDeltaRunAsWords(deltas, pos, result);
		}
	}

	return result;
};

encode.INDEX = memoize((l) => {
	let i;
	// var offset, offsets, offsetEncoder, encodedOffsets, encodedOffset, data,
	//    i, v;
	// Because we have to know which data type to use to encode the offsets,
	// we have to go through the values twice: once to encode the data and
	// calculate the offets, then again to encode the offsets using the fitting data type.
	let offset = 1; // First offset is always 1.
	const offsets = [offset];
	const data = [];

	for (i = 0; i < l.length; i++) {
		const v = encode.OBJECT(l[i]);

		data.push(...v);
		offset += v.length;
		offsets.push(offset);
	}

	if (data.length === 0) {
		return [0, 0];
	}

	const encodedOffsets = [];
	const offSize = (1 + Math.floor(Math.log(offset) / Math.log(2)) / 8) | 0;
	const offsetEncoder = [
		undefined,
		encode.BYTE,
		encode.USHORT,
		encode.UINT24,
		encode.ULONG,
	][offSize];

	for (i = 0; i < offsets.length; i += 1) {
		const encodedOffset = offsetEncoder(offsets[i]);

		encodedOffsets.push(...encodedOffset);
	}

	return Array.prototype.concat(
		encode.Card16(l.length),
		encode.OffSize(offSize),
		encodedOffsets,
		data,
	);
});

sizeOf.INDEX = v => encode.INDEX(v).length;

print.INDEX = (l) => {
	let i;
	// var offset, offsets, offsetEncoder, encodedOffsets, encodedOffset, data,
	//    i, v;
	// Because we have to know which data type to use to encode the offsets,
	// we have to go through the values twice: once to encode the data and
	// calculate the offets, then again to encode the offsets using the fitting data type.
	let offset = 1; // First offset is always 1.
	const offsets = [offset];
	const data = [];

	for (i = 0; i < l.length; i++) {
		const v = encode.OBJECT(l[i]);

		data.push(...v);
		offset += v.length;
		offsets.push(offset);
	}

	if (data.length === 0) {
		return [0, 0];
	}

	const encodedOffsets = [];
	const offSize = (1 + Math.floor(Math.log(offset) / Math.log(2)) / 8) | 0;
	const offsetEncoder = [
		undefined,
		encode.BYTE,
		encode.USHORT,
		encode.UINT24,
		encode.ULONG,
	][offSize];

	for (i = 0; i < offsets.length; i += 1) {
		const encodedOffset = offsetEncoder(offsets[i]);

		encodedOffsets.push(...encodedOffset);
	}
	console.log('Index');
	console.log(`${encode.Card16(l.length)}	index	length`);
	console.log(`${encode.OffSize(offSize)}	offSize`);
	encodedOffsets.forEach((off) => {
		console.log(off);
	});
	for (i = 0; i < l.length; i++) {
		console.log(`${data[i]}	${l.type}	${l.name}`);
	}
};

encode.DICT = (m) => {
	let d = [];
	const keys = Object.keys(m);
	const length = keys.length;

	for (let i = 0; i < length; i++) {
		// Object.keys() return string keys, but our keys are always numeric.
		const k = parseInt(keys[i], 0);
		const v = m[k];

		// Value comes before the key.
		d = d.concat(encode.OPERAND(v.value, v.type));
		d = d.concat(encode.OPERATOR(k));
	}

	return d;
};

sizeOf.DICT = m => encode.DICT(m).length;

print.DICT = (m) => {
	console.log('Dict');
	const keys = Object.keys(m);
	const length = keys.length;

	for (let i = 0; i < length; i++) {
		// Object.keys() return string keys, but our keys are always numeric.
		const k = parseInt(keys[i], 0);
		const v = m[k];

		// Value comes before the key.
		console.log(
			`${encode.OPERAND(v.value, v.type)}${encode.OPERATOR(k)}	${v.type}	${
				v.name
			}`,
		);
	}
};

/**
 * @param {number}
 * @returns {Array}
 */
encode.OPERATOR = (v) => {
	if (v < 1200) {
		return [v];
	}

	return [12, v - 1200];
};

encode.OPERAND = (v, type) => {
	let d = [];

	if (Array.isArray(type)) {
		for (let i = 0; i < type.length; i++) {
			checkArgument(
				v.length === type.length,
				`Not enough arguments given for type ${type}`,
			);
			d = d.concat(encode.OPERAND(v[i], type[i]));
		}
	}
	else if (type === 'SID') {
		d = d.concat(encode.NUMBER(v));
	}
	else if (type === 'offset') {
		// We make it easy for ourselves and always encode offsets as
		// 4 bytes. This makes offset calculation for the top dict easier.
		d = d.concat(encode.NUMBER32(v));
	}
	else if (type === 'number') {
		d = d.concat(encode.NUMBER(v));
	}
	else if (type === 'real') {
		d = d.concat(encode.REAL(v));
	}
	else {
		throw new Error(`Unknown operand type ${type}`);
		// FIXME Add support for booleans
	}

	return d;
};

encode.OP = encode.BYTE;
sizeOf.OP = sizeOf.BYTE;

const charStringCache = typeof WeakMap === 'function' && new WeakMap();

encode.CHARSTRING = memoize((ops) => {
	// See encode.MACSTRING for why we don't do "if (wmm && wmm.has(ops))".
	if (charStringCache) {
		const cachedValue = charStringCache.get(ops);

		if (cachedValue !== undefined) {
			return cachedValue;
		}
	}

	let d = [];
	const length = ops.length;

	for (let i = 0; i < length; i++) {
		const op = ops[i];

		d = d.concat(encode[op.type](op.value));
	}

	if (charStringCache) {
		charStringCache.set(ops, d);
	}

	return d;
});

sizeOf.CHARSTRING = ops => encode.CHARSTRING(ops).length;

encode.OBJECT = (v) => {
	const encodingFunction = encode[v.type];

	checkArgument(
		encodingFunction !== undefined,
		`No encoding function for type ${v.type}`,
	);
	return encodingFunction(v.value);
};

sizeOf.OBJECT = (v) => {
	const sizeOfFunction = sizeOf[v.type];

	checkArgument(
		sizeOfFunction !== undefined,
		`No sizeOf function for type ${v.type}`,
	);
	return sizeOfFunction(v.value);
};

print.OBJECT = (v) => {
	const printFunction = print[v.type];

	checkArgument(
		printFunction !== undefined,
		`No print function for type ${v.type}`,
	);
	printFunction(v.value);
};

encode.TABLE = (table) => {
	let d = [];
	const length = table.fields.length;
	const subtables = [];
	const subtableOffsets = [];

	for (let i = 0; i < length; i++) {
		const field = table.fields[i];
		const encodingFunction = encode[field.type];
		let value = table[field.name];

		checkArgument(
			encodingFunction !== undefined,
			`No encoding function for field type ${field.type} (${field.name})`,
		);

		if (value === undefined) {
			value = field.value;
		}

		const bytes = encodingFunction(value);

		if (field.type === 'TABLE') {
			subtableOffsets.push(d.length);
			d = d.concat([0, 0]);
			subtables.push(bytes);
		}
		else {
			d = d.concat(bytes);
		}
	}

	for (let i = 0; i < subtables.length; i++) {
		const o = subtableOffsets[i];
		const offset = d.length;

		checkArgument(offset < 65536, `Table ${table.tableNamk} too big.`);
		d[o] = offset >> 8;
		d[o + 1] = offset & 0xff;
		d = d.concat(subtables[i]);
	}

	return d;
};

sizeOf.TABLE = (table) => {
	let numBytes = 0;
	const length = table.fields.length;

	for (let i = 0; i < length; i++) {
		const field = table.fields[i];
		const sizeOfFunction = sizeOf[field.type];
		let value = table[field.name];

		checkArgument(
			sizeOfFunction !== undefined,
			`No sizeOf function for field type ${field.type} (${field.name})`,
		);

		if (value === undefined) {
			value = field.value;
		}

		numBytes += sizeOfFunction(value);

		// Subtables take 2 more bytes for offsets.
		if (field.type === 'TABLE') {
			numBytes += 2;
		}
	}

	return numBytes;
};

encode.RECORD = encode.TABLE;
sizeOf.RECORD = sizeOf.TABLE;

encode.LITERAL = v => v;

sizeOf.LITERAL = v => v.length;

encode.ARRAY = (array) => {
	const result = [];

	if (array.length > 0) {
		const type = array[0].type;

		for (let i = 0; i < length; i++) {
			const item = array[i];

			checkArgument(
				type === item.type,
				`Item must be of type ${type} but is of type ${item.type}`,
			);

			const encodingFunction = encode[item.type || 'TABLE'];

			checkArgument(
				encodingFunction !== undefined,
				`No encoding function for field type ${item.type} (${item.name})`,
			);

			result.push(encodingFunction(item));
		}
	}

	return result;
};

sizeOf.ARRAY = (array) => {
	if (array.length > 0) {
		const sizeOfFunction = sizeOf[array[0].type || 'TABLE'];

		// we can use a trick like this because items in an array should always
		// have the same size (even if they are records)
		return array.length * sizeOfFunction(array[0]);
	}

	return 0;
};
[
	'BYTE',
	'CHAR',
	'CHARARRAY',
	'USHORT',
	'SHORT',
	'UINT16',
	'Offset16',
	'UINT24',
	'ULONG',
	'LONG',
	'FIXED',
	'FWORD',
	'UFWORD',
	'LONGDATETIME',
	'TAG',
	'Card8',
	'Card16',
	'OffSize',
	'SID',
	'NUMBER',
	'NUMBER16',
	'NUMBER32',
	'REAL',
	'NAME',
	'STRING',
	'UTF16',
	'MACSTRING',
	'OPERATOR',
	'OPERAND',
].forEach((name) => {
	print[name] = (v) => {
		console.log(`${encode[name](v).join('')}	${v.type}	${v.name}`);
	};
});
/* eslint-enable babel/new-cap */
