#!/usr/bin/env node
/**
 * List Templates Script
 * 
 * This script lists all available font templates in the system.
 */

const fs = require('fs').promises;
const path = require('path');

async function listTemplates() {
	console.log('📋 Font Templates in Prototypo\n');
	
	// 1. List templates from node_modules
	console.log('🔍 Available Template Packages:');
	await listTemplatePackages();
	
	// 2. List built templates
	console.log('\n🏗️ Built Templates:');
	await listBuiltTemplates();
	
	// 3. List configured templates
	console.log('\n⚙️ Configured Templates:');
	await listConfiguredTemplates();
}

async function listTemplatePackages() {
	const nodeModulesPath = path.join(__dirname, '..', 'node_modules');
	
	try {
		const dirs = await fs.readdir(nodeModulesPath);
		const templateDirs = dirs.filter(dir => dir.endsWith('.ptf'));
		
		if (templateDirs.length === 0) {
			console.log('  ❌ No template packages found');
			return;
		}
		
		for (const templateDir of templateDirs) {
			try {
				const packageJsonPath = path.join(nodeModulesPath, templateDir, 'package.json');
				const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf8'));
				console.log(`  ✅ ${templateDir} (v${packageJson.version || 'unknown'})`);
			} catch (error) {
				console.log(`  ⚠️ ${templateDir} (package.json not readable)`);
			}
		}
	} catch (error) {
		console.log('  ❌ Could not read node_modules directory');
	}
}

async function listBuiltTemplates() {
	const templatesPath = path.join(__dirname, '..', 'dist', 'templates');
	
	try {
		const dirs = await fs.readdir(templatesPath);
		const templateDirs = dirs.filter(dir => dir.endsWith('.ptf'));
		
		if (templateDirs.length === 0) {
			console.log('  ❌ No built templates found (run `npm start` to build)');
			return;
		}
		
		for (const templateDir of templateDirs) {
			try {
				const fontJsonPath = path.join(templatesPath, templateDir, 'font.json');
				const stats = await fs.stat(fontJsonPath);
				const sizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
				console.log(`  ✅ ${templateDir} (${sizeInMB} MB)`);
			} catch (error) {
				console.log(`  ⚠️ ${templateDir} (font.json missing)`);
			}
		}
	} catch (error) {
		console.log('  ❌ Could not read dist/templates directory (run `npm start` to build)');
	}
}

async function listConfiguredTemplates() {
	const storePath = path.join(__dirname, '..', 'app', 'scripts', 'stores', 'creation.stores.jsx');
	
	try {
		const storeContent = await fs.readFile(storePath, 'utf8');
		
		// Extract templateList array
		const templateListMatch = storeContent.match(/templateList:\s*\[([\s\S]*?)\],\s*\n\s*\/\/ end template list/);
		
		if (!templateListMatch) {
			console.log('  ❌ Could not parse templateList from creation.stores.jsx');
			return;
		}
		
		// Parse template entries
		const templateEntries = templateListMatch[1].match(/\{[\s\S]*?\}/g);
		
		if (!templateEntries || templateEntries.length === 0) {
			console.log('  ❌ No templates configured in store');
			return;
		}
		
		templateEntries.forEach(entry => {
			const nameMatch = entry.match(/name:\s*'([^']+)'/);
			const templateNameMatch = entry.match(/templateName:\s*'([^']+)'/);
			const providerMatch = entry.match(/provider:\s*'([^']+)'/);
			
			if (nameMatch && templateNameMatch) {
				const name = nameMatch[1];
				const templateName = templateNameMatch[1];
				const provider = providerMatch ? providerMatch[1] : 'unknown';
				console.log(`  ✅ ${name} (${templateName}) [${provider}]`);
			}
		});
		
	} catch (error) {
		console.log('  ❌ Could not read creation.stores.jsx');
	}
}

// Run the script
listTemplates().catch(console.error);