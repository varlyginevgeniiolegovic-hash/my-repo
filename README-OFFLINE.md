# Prototypo Offline Font Editor

This is a modified version of the Prototypo font editor that runs completely offline without requiring authentication or external services.

## Quick Start

### Option 1: Using the included server script
```bash
# Build the application (if not already built)
yarn run build:dist

# Start the local server
yarn run serve
# or
node serve.js
```

The editor will be available at `http://localhost:9000`

### Option 2: Using any static HTTP server
```bash
# After building, serve the dist/ directory with any static server
npx serve dist
# or
python -m http.server 9000 --directory dist
# or
php -S localhost:9000 -t dist
```

## Build Process

### Full build from scratch:
```bash
# Install dependencies
yarn install

# Build DLL libraries and main application
yarn run build:dist

# Start the server
yarn run serve
```

### Development build:
```bash
# For development with hot reload (requires original Prototypo setup)
yarn start
```

## What was changed?

1. **Authentication Removed**: All Hoodie/Intercom authentication was removed from `main.js`. The app now directly renders the font editing interface (`Workboard` component).

2. **Shutdown Messages Removed**: Removed all "Prototypo is no more" and shutdown messages from signin and register components.

3. **Dependencies Fixed**: 
   - Jest packages pinned to v28.1.3
   - Added resolutions for jest, jest-snapshot, babel-jest, and graceful-fs@4.2.2
   - node-sass upgraded to 4.14.1, gulp-sass to 4.1.0
   - Removed @storybook/addon-storyshots dependency

4. **Build Process**: Created a complete offline build that includes all necessary assets and a simple HTTP server.

## Architecture

The offline version uses the same core Prototypo components:
- **Workboard**: Main editing interface
- **PrototypoPanel**: Font preview and editing
- **GlyphPanel**: Individual glyph editing
- **FontControls**: Parameter sliders and controls

All functionality works offline including:
- Font parameter adjustment via sliders
- Real-time font preview
- Glyph editing
- Text input and preview
- Export capabilities (where not dependent on external services)

## Server Configuration

The included `serve.js` provides:
- Static file serving from the `dist/` directory
- Proper MIME types for fonts and assets
- SPA routing fallback to `index.html`
- Configurable port via `PORT` environment variable

## System Requirements

- Node.js 14+ (tested on macOS ARM64)
- Modern web browser with JavaScript enabled
- ~100MB disk space for built assets

## Troubleshooting

### Build Issues
- If build fails, try: `rm -rf node_modules yarn.lock && yarn install`
- Ensure Node.js version is 14 or higher
- On macOS, you may need to install Xcode command line tools

### Runtime Issues  
- Check browser console for JavaScript errors
- Ensure all assets in `dist/` directory are accessible
- Verify the DLL file exists at `dist/dll/libs.dll.js`

### External Service Warnings
The HTML still contains references to external services (Google Analytics, Facebook Pixel, Intercom, Stripe) which will fail to load but won't break the core functionality. These can be safely ignored or removed if desired.

## License

This modified version maintains the original AGPL-3.0 license from the Prototypo project.