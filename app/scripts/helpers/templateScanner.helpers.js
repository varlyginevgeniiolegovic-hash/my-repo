/**
 * Template Scanner Helper
 * 
 * This module provides functionality to automatically discover and configure
 * new font templates added to the node_modules folder.
 */

/**
 * Scan node_modules for available template packages
 * @returns {Promise<Array>} Array of discovered template packages
 */
export async function scanForTemplatePackages() {
	// These are the known template packages that follow the .ptf naming convention
	const possibleTemplates = [
		'venus.ptf',
		'antique.ptf',
		'elzevir.ptf', 
		'gfnt.ptf',
		'john-fell.ptf',
		'spectral.ptf',
		'grotesk.ptf',
		'fell.ptf',
		// Add more template names here as they become available
	];
	
	const availableTemplates = [];
	
	console.log('🔍 Scanning for template packages...');
	
	for (const templateName of possibleTemplates) {
		try {
			// Try to load the package to see if it exists
			const packageExists = await checkTemplatePackageExists(templateName);
			if (packageExists) {
				availableTemplates.push(templateName);
				console.log(`✅ Found template package: ${templateName}`);
			}
		} catch (error) {
			console.log(`❌ Template package not found: ${templateName}`);
		}
	}
	
	console.log(`Found ${availableTemplates.length} template packages`);
	return availableTemplates;
}

/**
 * Check if a template package exists in node_modules
 * @param {string} templateName - Name of the template package
 * @returns {Promise<boolean>} Whether the package exists
 */
async function checkTemplatePackageExists(templateName) {
	try {
		// Try to load the package.json to confirm it exists
		await import(`../../../node_modules/${templateName}/package.json`);
		return true;
	} catch (error) {
		return false;
	}
}

/**
 * Generate template metadata from package information
 * @param {string} templateName - Name of the template
 * @returns {Object} Template metadata object
 */
export function generateTemplateMetadata(templateName) {
	// Remove .ptf extension for display names
	const baseName = templateName.replace('.ptf', '');
	
	// Create a human-readable display name
	const displayName = baseName
		.split('-')
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
	
	// Map known templates to their proper display names and providers
	const templateMetadata = {
		'venus.ptf': {
			name: 'Prototypo Grotesk',
			familyName: 'Prototypo Grotesk',
			provider: 'prototypo',
			sample: 'venus-preview.svg',
			sampleLarge: 'template-grotesk.svg',
		},
		'antique.ptf': {
			name: 'Antique Gothic',
			familyName: 'Antique Gothic', 
			provider: 'production',
			sample: 'antique-sample.svg',
			sampleLarge: 'template-antique.svg',
		},
		'elzevir.ptf': {
			name: 'Prototypo Elzevir',
			familyName: 'Prototypo Elzevir',
			provider: 'prototypo',
			sample: 'elzevir-preview.svg',
			sampleLarge: 'template-elzevir.svg',
		},
		'gfnt.ptf': {
			name: 'Spectral',
			familyName: 'Spectral',
			provider: 'google',
			sample: 'spectral-preview.svg',
			sampleLarge: 'template-spectral.svg',
		},
		'john-fell.ptf': {
			name: 'Prototypo Fell',
			familyName: 'Prototypo Fell',
			provider: 'prototypo',
			sample: 'john-fell-preview.svg',
			sampleLarge: 'template-fell.svg',
		},
	};
	
	// Use specific metadata if available, otherwise generate generic metadata
	const metadata = templateMetadata[templateName] || {
		name: displayName,
		familyName: displayName,
		provider: 'prototypo',
		sample: `${baseName}-preview.svg`,
		sampleLarge: `template-${baseName}.svg`,
	};
	
	return {
		...metadata,
		templateName,
	};
}

/**
 * Auto-discover templates and generate template list
 * @returns {Promise<Array>} Array of template configurations
 */
export async function autoDiscoverTemplates() {
	try {
		const availablePackages = await scanForTemplatePackages();
		
		const templateList = availablePackages.map(templateName => 
			generateTemplateMetadata(templateName)
		);
		
		console.log('📋 Generated template list:', templateList);
		return templateList;
		
	} catch (error) {
		console.error('Failed to auto-discover templates:', error);
		return [];
	}
}

/**
 * Check if new templates have been added since last scan
 * @param {Array} currentTemplateList - Current template list from store
 * @returns {Promise<Object>} Object containing new, removed, and current templates
 */
export async function checkForTemplateUpdates(currentTemplateList = []) {
	const discoveredTemplates = await autoDiscoverTemplates();
	
	const currentNames = currentTemplateList.map(t => t.templateName);
	const discoveredNames = discoveredTemplates.map(t => t.templateName);
	
	const newTemplates = discoveredTemplates.filter(
		t => !currentNames.includes(t.templateName)
	);
	
	const removedTemplates = currentTemplateList.filter(
		t => !discoveredNames.includes(t.templateName)
	);
	
	return {
		newTemplates,
		removedTemplates,
		currentTemplates: discoveredTemplates,
		hasChanges: newTemplates.length > 0 || removedTemplates.length > 0,
	};
}