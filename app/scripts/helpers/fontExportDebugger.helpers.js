/**
 * Font Export Debugger Helper
 * 
 * This module provides debugging utilities for OTF font export issues.
 */

/**
 * Debug font export process
 * @param {ArrayBuffer} fontBuffer - The font buffer to analyze
 * @param {string} filename - The intended filename
 * @returns {Object} Debug information about the font
 */
export function debugFontExport(fontBuffer, filename) {
	console.log('🔍 Debugging font export:', filename);
	
	const debugInfo = {
		filename,
		bufferSize: fontBuffer.byteLength,
		isValidBuffer: fontBuffer instanceof ArrayBuffer,
		timestamp: new Date().toISOString(),
	};
	
	try {
		// Check if buffer has basic OTF/TTF structure
		const view = new DataView(fontBuffer);
		
		// Read the sfnt version (first 4 bytes)
		const sfntVersion = view.getUint32(0, false); // big-endian
		
		debugInfo.sfntVersion = sfntVersion;
		debugInfo.sfntVersionHex = '0x' + sfntVersion.toString(16).toUpperCase().padStart(8, '0');
		
		// Check for valid OTF/TTF signatures
		const validSignatures = {
			0x00010000: 'TTF (TrueType)',
			0x4F54544F: 'OTF (OpenType with CFF)', // 'OTTO'
			0x74727565: 'TTF (TrueType on Mac)', // 'true'
			0x74797031: 'TTF (TrueType variation)', // 'typ1'
		};
		
		debugInfo.fontType = validSignatures[sfntVersion] || 'Unknown/Invalid';
		debugInfo.isValidFont = !!validSignatures[sfntVersion];
		
		if (debugInfo.isValidFont) {
			// Read number of tables
			const numTables = view.getUint16(4, false);
			debugInfo.numTables = numTables;
			
			// Read table directory
			const tables = [];
			for (let i = 0; i < numTables; i++) {
				const offset = 12 + (i * 16);
				const tag = String.fromCharCode(
					view.getUint8(offset),
					view.getUint8(offset + 1),
					view.getUint8(offset + 2),
					view.getUint8(offset + 3)
				);
				const checksum = view.getUint32(offset + 4, false);
				const tableOffset = view.getUint32(offset + 8, false);
				const length = view.getUint32(offset + 12, false);
				
				tables.push({ tag, checksum, offset: tableOffset, length });
			}
			
			debugInfo.tables = tables;
			debugInfo.requiredTables = ['cmap', 'head', 'hhea', 'hmtx', 'maxp', 'name', 'OS/2', 'post'];
			debugInfo.missingTables = debugInfo.requiredTables.filter(
				required => !tables.some(table => table.tag === required)
			);
			debugInfo.hasAllRequiredTables = debugInfo.missingTables.length === 0;
		}
		
	} catch (error) {
		debugInfo.error = error.message;
		debugInfo.isValidFont = false;
	}
	
	// Log the results
	console.log('📊 Font Export Debug Results:', debugInfo);
	
	if (!debugInfo.isValidFont) {
		console.error('❌ Invalid font file generated!');
		if (debugInfo.missingTables && debugInfo.missingTables.length > 0) {
			console.error('Missing required tables:', debugInfo.missingTables);
		}
	} else {
		console.log('✅ Valid font structure detected');
	}
	
	return debugInfo;
}

/**
 * Create a test font blob for validation
 * @param {ArrayBuffer} fontBuffer - The font buffer
 * @param {string} filename - The filename
 * @returns {Blob} A blob that can be used for testing
 */
export function createTestFontBlob(fontBuffer, filename) {
	const blob = new Blob([new DataView(fontBuffer)], {
		type: 'font/opentype'
	});
	
	// Add debugging info
	blob.debugInfo = debugFontExport(fontBuffer, filename);
	
	return blob;
}

/**
 * Test font loading in the browser
 * @param {ArrayBuffer} fontBuffer - The font buffer
 * @param {string} fontFamily - The font family name
 * @returns {Promise<boolean>} Whether the font loaded successfully
 */
export async function testFontLoading(fontBuffer, fontFamily) {
	try {
		const blob = createTestFontBlob(fontBuffer, `${fontFamily}.otf`);
		const url = URL.createObjectURL(blob);
		
		// Create a FontFace and try to load it
		const fontFace = new FontFace(fontFamily, `url(${url})`);
		
		await fontFace.load();
		document.fonts.add(fontFace);
		
		console.log(`✅ Font ${fontFamily} loaded successfully in browser`);
		
		// Clean up
		setTimeout(() => {
			document.fonts.delete(fontFace);
			URL.revokeObjectURL(url);
		}, 1000);
		
		return true;
		
	} catch (error) {
		console.error(`❌ Failed to load font ${fontFamily}:`, error);
		return false;
	}
}

/**
 * Enhanced download trigger with debugging
 * @param {ArrayBuffer} arrayBuffer - The font buffer
 * @param {string} filename - The filename
 */
export function debugTriggerDownload(arrayBuffer, filename) {
	console.log('🔽 Starting enhanced font download...');
	
	// Debug the font first
	const debugInfo = debugFontExport(arrayBuffer, filename);
	
	if (!debugInfo.isValidFont) {
		console.error('⚠️ Downloading potentially invalid font file!');
		// Still proceed with download for debugging purposes
	}
	
	const reader = new FileReader();
	
	reader.onloadend = () => {
		const a = document.createElement('a');
		a.download = filename;
		a.href = reader.result;
		a.style.display = 'none';
		
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		
		console.log(`✅ Font file ${filename} download triggered`);
		
		setTimeout(() => {
			URL.revokeObjectURL(reader.result);
		}, 1000);
	};
	
	reader.onerror = () => {
		console.error('❌ Failed to create download URL');
	};
	
	// Create blob with proper MIME type
	const blob = new Blob([new DataView(arrayBuffer)], {
		type: 'font/opentype'
	});
	
	reader.readAsDataURL(blob);
}

/**
 * Add debug utilities to window for easy access
 */
export function addDebugUtilities() {
	window.debugFontExport = debugFontExport;
	window.testFontLoading = testFontLoading;
	window.debugTriggerDownload = debugTriggerDownload;
	
	console.log('🛠️ Font debugging utilities added to window:');
	console.log('  - window.debugFontExport(buffer, filename)');
	console.log('  - window.testFontLoading(buffer, fontFamily)');
	console.log('  - window.debugTriggerDownload(buffer, filename)');
}