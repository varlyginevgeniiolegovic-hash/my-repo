#!/usr/bin/env node
/**
 * Add Template Script
 * 
 * This script helps you add new font templates to the Prototypo build system.
 * Usage: node scripts/add-template.js [template-name]
 */

const fs = require('fs').promises;
const path = require('path');

async function addTemplate(templateName) {
	if (!templateName) {
		console.log('Usage: node scripts/add-template.js [template-name]');
		console.log('Example: node scripts/add-template.js my-font.ptf');
		process.exit(1);
	}
	
	// Ensure template name ends with .ptf
	const fullTemplateName = templateName.endsWith('.ptf') ? templateName : `${templateName}.ptf`;
	const baseName = fullTemplateName.replace('.ptf', '');
	
	console.log(`Adding template: ${fullTemplateName}`);
	
	// 1. Check if template package exists in node_modules
	const templatePackagePath = path.join(__dirname, '..', 'node_modules', fullTemplateName);
	try {
		await fs.access(templatePackagePath);
		console.log(`✅ Template package found: ${templatePackagePath}`);
	} catch (error) {
		console.error(`❌ Template package not found: ${templatePackagePath}`);
		console.log('Please install the template package first:');
		console.log(`npm install ${fullTemplateName}`);
		process.exit(1);
	}
	
	// 2. Add gulp task to gulpfile.js
	await addGulpTask(fullTemplateName, baseName);
	
	// 3. Update template list in creation.stores.jsx
	await updateTemplateList(fullTemplateName, baseName);
	
	console.log(`✅ Successfully added template: ${fullTemplateName}`);
	console.log('🔄 Run `npm start` to rebuild with the new template');
}

async function addGulpTask(templateName, baseName) {
	const gulpfilePath = path.join(__dirname, '..', 'gulpfile.js');
	
	try {
		let gulpContent = await fs.readFile(gulpfilePath, 'utf8');
		
		// Check if task already exists
		if (gulpContent.includes(`cp-${baseName}`)) {
			console.log(`⚠️ Gulp task for ${templateName} already exists`);
			return;
		}
		
		// Add new gulp task
		const newTask = `
gulp.task('cp-${baseName}', () => gulp
	.src('./node_modules/${templateName}/dist/font.json')
	.pipe(gulp.dest('./dist/templates/${templateName}')));
`;
		
		// Find where to insert the new task (after existing cp- tasks)
		const insertAfter = 'gulp.task(\'cp-antique\'';
		const insertIndex = gulpContent.indexOf(insertAfter);
		
		if (insertIndex !== -1) {
			// Find the end of the antique task
			const taskEnd = gulpContent.indexOf(']);', insertIndex) + 3;
			gulpContent = gulpContent.slice(0, taskEnd) + newTask + gulpContent.slice(taskEnd);
			
			// Update the cp-genese task dependencies
			const geneseDeps = gulpContent.match(/gulp\.task\('cp-genese', \[([\s\S]*?)\]/);
			if (geneseDeps) {
				const currentDeps = geneseDeps[1];
				if (!currentDeps.includes(`'cp-${baseName}'`)) {
					const newDeps = currentDeps.trim() + `,\n\t'cp-${baseName}',`;
					gulpContent = gulpContent.replace(geneseDeps[0], `gulp.task('cp-genese', [${newDeps}]`);
				}
			}
			
			await fs.writeFile(gulpfilePath, gulpContent);
			console.log(`✅ Added gulp task: cp-${baseName}`);
		} else {
			console.error('❌ Could not find insertion point in gulpfile.js');
		}
		
	} catch (error) {
		console.error('❌ Failed to update gulpfile.js:', error.message);
	}
}

async function updateTemplateList(templateName, baseName) {
	const storePath = path.join(__dirname, '..', 'app', 'scripts', 'stores', 'creation.stores.jsx');
	
	try {
		let storeContent = await fs.readFile(storePath, 'utf8');
		
		// Check if template already exists
		if (storeContent.includes(`templateName: '${templateName}'`)) {
			console.log(`⚠️ Template ${templateName} already exists in store`);
			return;
		}
		
		// Create display name
		const displayName = baseName
			.split('-')
			.map(word => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
		
		// Add new template entry
		const newTemplate = `		{
			sample: '${baseName}-preview.svg',
			sampleLarge: 'template-${baseName}.svg',
			name: '${displayName}',
			familyName: '${displayName}',
			templateName: '${templateName}',
			provider: 'prototypo',
		},`;
		
		// Find the end of the templateList array
		const templateListEnd = storeContent.indexOf('],\n\n\t// end template list store values');
		
		if (templateListEnd !== -1) {
			storeContent = storeContent.slice(0, templateListEnd) + newTemplate + '\n\t' + storeContent.slice(templateListEnd);
			await fs.writeFile(storePath, storeContent);
			console.log(`✅ Added template to store: ${templateName}`);
		} else {
			console.error('❌ Could not find templateList in creation.stores.jsx');
		}
		
	} catch (error) {
		console.error('❌ Failed to update creation.stores.jsx:', error.message);
	}
}

// Run the script
const templateName = process.argv[2];
addTemplate(templateName).catch(console.error);