/**
 * Template Loader Helper
 * 
 * This module provides functionality to dynamically load font templates
 * from the templates folder instead of using a hardcoded list.
 */

import { autoDiscoverTemplates } from './templateScanner.helpers';

/**
 * Scan the templates folder and return a list of available templates
 * @returns {Promise<Array>} Array of template information objects
 */
export async function scanTemplatesFolder() {
	try {
		console.log('🔍 Auto-discovering templates...');
		
		// Use the template scanner to find available templates
		const discoveredTemplates = await autoDiscoverTemplates();
		
		if (discoveredTemplates.length > 0) {
			console.log(`✅ Found ${discoveredTemplates.length} templates via auto-discovery`);
			return discoveredTemplates;
		} else {
			console.warn('⚠️ No templates discovered, falling back to manual detection');
			// Fallback to manual template detection
			const manualTemplates = await getTemplateFolders();
			if (manualTemplates.length > 0) {
				return manualTemplates.map(templateName => generateFallbackMetadata(templateName));
			}
		}
		
		// Last resort: return default hardcoded list
		console.warn('⚠️ Using hardcoded fallback template list');
		return getDefaultTemplateList();
		
	} catch (error) {
		console.warn('❌ Template scanning failed:', error);
		return getDefaultTemplateList();
	}
}

/**
 * Generate fallback metadata for a template name
 * @param {string} templateName - Name of the template
 * @returns {Object} Template metadata
 */
function generateFallbackMetadata(templateName) {
	const baseName = templateName.replace('.ptf', '');
	const displayName = baseName
		.split('-')
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
		
	return {
		sample: `${baseName}-preview.svg`,
		sampleLarge: `template-${baseName}.svg`,
		name: displayName,
		familyName: displayName,
		templateName: templateName,
		provider: 'prototypo',
	};
}

/**
 * Get template folders from the dist/templates directory
 * This function dynamically discovers available templates by checking the file system
 * @returns {Promise<Array>} Array of folder names
 */
async function getTemplateFolders() {
	// Check which templates are available by looking at what the gulp build process copies
	const knownTemplates = [
		'venus.ptf',
		'antique.ptf', 
		'elzevir.ptf',
		'gfnt.ptf',
		'john-fell.ptf',
	];
	
	const availableTemplates = [];
	
	// Test each template by trying to import its font.json
	for (const templateName of knownTemplates) {
		try {
			// Test if the template module is available
			const templateModule = await import(`../../../dist/templates/${templateName}/font.json`);
			if (templateModule && (templateModule.default || templateModule.fontinfo)) {
				availableTemplates.push(templateName);
				console.log(`✅ Template available: ${templateName}`);
			}
		} catch (error) {
			console.log(`❌ Template not available: ${templateName}`, error.message);
		}
	}
	
	// If no templates are available, check if we need to run the build
	if (availableTemplates.length === 0) {
		console.warn('⚠️ No templates found. You may need to run the build process first.');
	}
	
	return availableTemplates;
}

/**
 * Fallback template list when dynamic loading fails
 * @returns {Array} Default template configuration
 */
function getDefaultTemplateList() {
	return [
		{
			sample: 'spectral-preview.svg',
			sampleLarge: 'template-spectral.svg',
			name: 'Spectral',
			familyName: 'Spectral',
			templateName: 'gfnt.ptf',
			provider: 'google',
		},
		{
			sample: 'antique-sample.svg',
			sampleLarge: 'template-antique.svg',
			name: 'Antique Gothic',
			familyName: 'Antique Gothic',
			templateName: 'antique.ptf',
			provider: 'production',
		},
		{
			sample: 'elzevir-preview.svg',
			sampleLarge: 'template-elzevir.svg',
			name: 'Prototypo Elzevir',
			familyName: 'Prototypo Elzevir',
			templateName: 'elzevir.ptf',
			provider: 'prototypo',
		},
		{
			sample: 'venus-preview.svg',
			sampleLarge: 'template-grotesk.svg',
			name: 'Prototypo Grotesk',
			familyName: 'Prototypo Grotesk',
			templateName: 'venus.ptf',
			provider: 'prototypo',
		},
		{
			sample: 'john-fell-preview.svg',
			sampleLarge: 'template-fell.svg',
			name: 'Prototypo Fell',
			familyName: 'Prototypo Fell',
			templateName: 'john-fell.ptf',
			provider: 'prototypo',
		},
	];
}

/**
 * Load template data from folder
 * @param {string} templateName - Name of the template to load
 * @returns {Promise<Object>} Template data object
 */
export async function loadTemplateFromFolder(templateName) {
	try {
		console.log(`Loading template: ${templateName}`);
		
		// Load the template's font.json file
		const typedataJSON = await import(`../../../dist/templates/${templateName}/font.json`);
		
		// Process glyphs
		const glyphs = {};
		if (typedataJSON.glyphs) {
			Object.values(typedataJSON.glyphs).forEach((glyph) => {
				if (!glyphs[glyph.unicode]) {
					glyphs[glyph.unicode] = [];
				}
				glyphs[glyph.unicode].push(glyph);
			});
		}
		
		// Extract initial values from controls
		const initValues = {};
		if (typedataJSON.controls) {
			typedataJSON.controls.forEach(group => {
				if (group.parameters) {
					group.parameters.forEach((param) => {
						initValues[param.name] = param.init;
					});
				}
			});
		}
		
		console.log(`✅ Successfully loaded template ${templateName}`);
		
		return {
			name: templateName,
			json: typedataJSON,
			initValues,
			glyphs,
		};
		
	} catch (error) {
		console.error(`Failed to load template ${templateName}:`, error);
		throw error;
	}
}

/**
 * Initialize templates by scanning folder and loading template data
 * @returns {Promise<Array>} Array of loaded template data
 */
export async function initializeTemplatesFromFolder() {
	console.log('🔍 Scanning templates folder...');
	
	try {
		// First get the list of available templates
		const templateList = await scanTemplatesFolder();
		
		console.log('📁 Loading template data...');
		
		// Load the actual template data for each template
		const templateDataPromises = templateList.map(async (templateInfo) => {
			try {
				const templateData = await loadTemplateFromFolder(templateInfo.templateName);
				return {
					...templateData,
					info: templateInfo, // Include the template metadata
				};
			} catch (error) {
				console.warn(`Failed to load template data for ${templateInfo.templateName}:`, error);
				return null;
			}
		});
		
		const templateResults = await Promise.all(templateDataPromises);
		const validTemplates = templateResults.filter(template => template !== null);
		
		console.log(`✅ Successfully loaded ${validTemplates.length} templates from folder`);
		
		return {
			templateList,
			templatesData: validTemplates
		};
		
	} catch (error) {
		console.error('Failed to initialize templates from folder:', error);
		throw error;
	}
}