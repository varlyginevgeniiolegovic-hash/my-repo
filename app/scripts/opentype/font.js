import _reduce from 'lodash/reduce';
import _find from 'lodash/find';
import {checkArgument} from './check.js';
import {getUnicodeRange} from './os2.js';
import {
	buildTableObj,
	encodeTable,
	sizeOfTable,
	cff,
	cmap,
	head,
	hhea,
	hmtx,
	ltag,
	maxp,
	name,
	post,
	os2,
} from './table.js';

export const usWeightClasses = {
	THIN: 100,
	EXTRA_LIGHT: 200,
	LIGHT: 300,
	NORMAL: 400,
	MEDIUM: 500,
	SEMI_BOLD: 600,
	BOLD: 700,
	EXTRA_BOLD: 800,
	BLACK: 900,
};

export const usWidthClasses = {
	ULTRA_CONDENSED: 1,
	EXTRA_CONDENSED: 2,
	CONDENSED: 3,
	SEMI_CONDENSED: 4,
	MEDIUM: 5,
	SEMI_EXPANDED: 6,
	EXPANDED: 7,
	EXTRA_EXPANDED: 8,
	ULTRA_EXPANDED: 9,
};

function log2(v) {
	return (Math.log(v) / Math.log(2)) | 0;
}

function computeCheckSum(bytes) {
	while (bytes.length % 4 !== 0) {
		bytes.push(0);
	}

	let sum = 0;

	for (let i = 0; i < bytes.length; i += 4) {
		sum
			+= (bytes[i] << 24)
			+ (bytes[i + 1] << 16)
			+ (bytes[i + 2] << 8)
			+ bytes[i + 3];
	}

	sum %= Math.pow(2, 32);

	return sum;
}

export function fontToSfntTable(font) {
	const {
		ascender,
		descender,
		unitsPerEm,
		glyphs,
		createdTimestamp,
		fontFamily,
		fontSubfamily,
		postScriptName,
		manufacturer,
		manufacturerURL,
		designer,
		designerURL,
		license,
		licenseURL,
		version,
		description,
		copyright,
		trademark,
		usWeightClass,
		usWidthClass,
		fsSelection,
	} = font;

	const xMins = [];
	const yMins = [];
	const xMaxs = [];
	const yMaxs = [];
	const advanceWidths = [];
	const leftSideBearings = [];
	const rightSideBearings = [];
	let firstCharIndex = Infinity;
	let lastCharIndex = 0;
	let ulUnicodeRange1 = 0;
	let ulUnicodeRange2 = 0;
	let ulUnicodeRange3 = 0;
	let ulUnicodeRange4 = 0;

	font.glyphs.unshift({
		name: '.notdef',
		unicode: 0,
		otContours: [],
		advanceWidth: 100,
		spacingLeft: 0,
		spacingRight: 0,
	});

	for (let i = 0; i < font.glyphs.length; i++) {
		const glyph = font.glyphs[i];
		const unicode = glyph.unicode;

		if (isNaN(glyph.advanceWidth)) {
			throw new Error(
				`Glyph ${glyph.name} (${i}): advanceWidth is not a number`,
			);
		}

		if (firstCharIndex > unicode && unicode > 0) {
			firstCharIndex = unicode;
		}

		if (lastCharIndex < unicode) {
			lastCharIndex = unicode;
		}

		const position = getUnicodeRange(unicode);

		if (position < 32) {
			ulUnicodeRange1 |= 1 << position;
		}
		else if (position < 64) {
			ulUnicodeRange2 |= 1 << (position - 32);
		}
		else if (position < 96) {
			ulUnicodeRange3 |= 1 << (position - 64);
		}
		else if (position < 123) {
			ulUnicodeRange4 |= 1 << (position - 96);
		}
		else {
			throw new Error(
				'Unicode ranges bits > 123 are reserved for internal usage',
			);
		}

		if (glyph.name === '.notdef') {
			continue;
		}

		const metrics = getMetrics(glyph);

		xMins.push(metrics.xMin);
		yMins.push(metrics.yMin);
		xMaxs.push(metrics.xMax);
		yMaxs.push(metrics.yMax);
		leftSideBearings.push(metrics.leftSideBearing);
		rightSideBearings.push(metrics.rightSideBearing);
		advanceWidths.push(glyph.advanceWidth);
	}
	const advanceWidthMax = Math.max.apply(null, advanceWidths);
	const advanceWithAvg = _reduce(advanceWidths, (acc, item) => acc + item, 0) / advanceWidths.length;
	const minLeftSideBearing = Math.min.apply(null, leftSideBearings);
	const maxLeftSideBearing = Math.min.apply(null, leftSideBearings);
	const xMin = Math.min.apply(null, xMins);
	const yMin = Math.min.apply(null, yMins);
	const xMax = Math.max.apply(null, xMaxs);
	const yMax = Math.max.apply(null, yMaxs);

	const headTable = head.make({
		flags: 3,
		unitsPerEm,
		xMin,
		yMin,
		xMax,
		yMax,
		lowestRecPPEM: 3,
		createdTimestamp,
	});

	const hheaTable = hhea.make({
		ascender,
		descender,
		advanceWidthMax,
		minLeftSideBearing,
		maxLeftSideBearing,
		xMaxExtent: maxLeftSideBearing + xMax - xMin,
		numberOfHMetrics: glyphs.length,
	});

	const maxpTable = maxp.make(glyphs.length);

	const hasSpace = _find(font.glyphs, glyph => glyph.unicode === 32);
	const os2Table = os2.make({
		xAvgCharWidth: Math.round(advanceWithAvg),
		usWeightClass: usWeightClass || usWeightClasses.NORMAL,
		usWidthClass: usWidthClass && typeof usWidthClass === 'string'
			? usWidthClasses[usWidthClass.toUpperCase()]
			: usWidthClasses.MEDIUM,
		usFirstCharIndex: firstCharIndex,
		usLastCharIndex: lastCharIndex,
		ulUnicodeRange1,
		ulUnicodeRange2,
		ulUnicodeRange3,
		ulUnicodeRange4,
		fsSelection,
		sTypoAscender: ascender,
		sTypoDescender: descender,
		sTypeLineGap: 0,
		usWinAscent: yMax,
		usWinDescent: Math.abs(yMin),
		ulCodePageRange1: 1,
		sxHeight: metricsForChar(font, 'xyvw', {yMax: Math.round(ascender / 2)})
			.yMax,
		sCapHeight: metricsForChar(font, 'HIKLEFJMNTZBDPRAGOQSUVWXY', {yMax}).yMax,
		usDefaultChar: hasSpace ? 32 : 0,
		usBreakChar: hasSpace ? 32 : 0,
	});

	const hmtxTable = hmtx.make(glyphs);
	const cmapTable = cmap.make(glyphs);

	const englishFamilyName = fontFamily.en;
	const englishStyleName = fontSubfamily.en;
	const englishFullName = `${englishFamilyName} ${englishStyleName}`;
	const postScriptNameString
		= postScriptName.en
		|| `${englishFamilyName.replace(/\s/g, '')}-${englishStyleName}`;

	const names = {
		fontFamily,
		fontSubfamily,
		fullName: {en: englishFullName},
		postScriptName: {en: postScriptNameString},
		designer,
		designerURL,
		manufacturer,
		manufacturerURL,
		license,
		licenseURL,
		version: {en: version},
		description: {en: description},
		copyright,
		trademark,
		uniqueID: {en: `${manufacturer}:${englishFullName}`},
		preferredFamily: fontFamily,
		preferredSubfamily: fontSubfamily,
	};

	const languageTags = [];
	const nameTable = name.make(names, languageTags);
	const ltagTable
		= languageTags.length > 0 ? ltag.make(languageTags) : undefined;

	const postTable = post.make();
	const cffTable = cff.make(glyphs, {
		version: version.en,
		fullName: englishFullName,
		familyName: englishFamilyName,
		weightName: englishStyleName,
		postScriptName: postScriptNameString,
		unitsPerEm,
		fontBBox: [0, yMin, ascender, advanceWidthMax],
	});

	const tables = [
		headTable,
		hheaTable,
		maxpTable,
		os2Table,
		nameTable,
		cmapTable,
		postTable,
		cffTable,
		hmtxTable,
	];

	if (ltagTable) {
		tables.push(ltagTable);
	}

	const sfntTable = makeSfntTable(tables);
	const bytes = encodeTable(sfntTable);
	const checkSum = computeCheckSum(bytes);
	const tableFields = sfntTable.fields;
	let checkSumAdjusted = false;

	for (let i = 0; i < tableFields.length; i++) {
		if (tableFields[i].name === 'head table') {
			tableFields[i].value.checkSumAdjustment = 0xb1b0afba - checkSum;
			checkSumAdjusted = true;
			break;
		}
	}

	if (!checkSumAdjusted) {
		throw new Error('Could not find head table with checkSum to adjust');
	}

	return new Uint8Array(encodeTable(sfntTable));
}

function makeTableRecord(tag, checkSum, offset, length) {
	return buildTableObj('Table Record', [
		{name: 'tag', type: 'TAG', value: tag === undefined ? '' : tag},
		{
			name: 'checkSum',
			type: 'ULONG',
			value: checkSum === undefined ? 0 : checkSum,
		},
		{name: 'offset', type: 'ULONG', value: offset === undefined ? 0 : offset},
		{name: 'length', type: 'ULONG', value: length === undefined ? 0 : length},
	]);
}

function makeSfntTable(tables) {
	const sfnt = buildTableObj('sfnt', [
		{name: 'version', type: 'TAG', value: 'OTTO'},
		{name: 'numTables', type: 'USHORT', value: 0},
		{name: 'searchRange', type: 'USHORT', value: 0},
		{name: 'entrySelector', type: 'USHORT', value: 0},
		{name: 'rangeShift', type: 'USHORT', value: 0},
	]);

	sfnt.tables = tables;
	sfnt.numTables = tables.length;
	const highestPowerOf2 = Math.pow(2, log2(sfnt.numTables));

	sfnt.searchRange = 16 * highestPowerOf2;
	sfnt.entrySelector = log2(highestPowerOf2);
	sfnt.rangeShift = sfnt.numTables * 16 - sfnt.searchRange;

	const recordFields = [];
	const tableFields = [];

	let offset
		= sizeOfTable(sfnt) + sizeOfTable(makeTableRecord()) * sfnt.numTables;

	while (offset % 4 !== 0) {
		offset += 1;
		tableFields.push({name: 'padding', type: 'BYTE', value: 0});
	}

	for (let i = 0; i < tables.length; i += 1) {
		const t = tables[i];

		checkArgument(
			t.tableName.length === 4,
			`Table name ${t.tableName} is invalid.`,
		);

		const tableLength = sizeOfTable(t);
		const tableRecord = makeTableRecord(
			t.tableName,
			computeCheckSum(encodeTable(t)),
			offset,
			tableLength,
		);

		recordFields.push({
			name: `${tableRecord.tag} Table Record`,
			type: 'RECORD',
			value: tableRecord,
		});
		tableFields.push({name: `${t.tableName} table`, type: 'RECORD', value: t});
		offset += tableLength;
		checkArgument(
			!isNaN(offset),
			'Something went wrong calculating the offset.',
		);
		while (offset % 4 !== 0) {
			offset += 1;
			tableFields.push({name: 'padding', type: 'BYTE', value: 0});
		}
	}

	// Table records need to be sorted alphabetically.
	recordFields.sort((r1, r2) => {
		if (r1.value.tag > r2.value.tag) {
			return 1;
		}

		return -1;
	});

	sfnt.fields = sfnt.fields.concat(recordFields);
	sfnt.fields = sfnt.fields.concat(tableFields);
	return sfnt;
}

function metricsForChar(glyphs, chars, notFoundMetrics) {
	for (let i = 0; i < chars.length; i++) {
		const glyph = _find(glyphs, {
			unicode: chars[i].charCodeAt(0),
		});

		if (glyph) {
			return getMetrics(glyph);
		}
	}

	return notFoundMetrics;
}

function getMetrics(glyph) {
	const xCoords = [];
	const yCoords = [];

	glyph.otContours.forEach((contour) => {
		contour.forEach((curve) => {
			curve.forEach((node) => {
				xCoords.push(node.x);
				yCoords.push(node.y);
			});
		});
	});

	return {
		xMin: Math.min(...xCoords),
		xMax: Math.max(...xCoords),
		yMin: Math.min(...yCoords),
		yMax: Math.max(...yCoords),
		leftSideBearing: glyph.spacingLeft,
		rightSideBearing: glyph.spacingRight,
	};
}
