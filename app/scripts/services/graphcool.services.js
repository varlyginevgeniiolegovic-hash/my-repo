import {ApolloClient, createBatchingNetworkInterface} from 'react-apollo';

import isProduction from '../helpers/is-production.helpers';

const networkInterface = createBatchingNetworkInterface({
	uri: `https://api.graph.cool/simple/v1/prototypo${
		isProduction() ? '' : '-new-dev'
	}`,
	batchInterval: 10,
});

networkInterface.use([
	{
		applyBatchMiddleware(req, next) {
			if (!req.options.headers) {
				req.options.headers = {};
			}

			// get the authentication token from local storage if it exists
			if (localStorage.getItem('graphcoolToken')) {
				req.options.headers.authorization = `Bearer ${localStorage.getItem(
					'graphcoolToken',
				)}`;
			}
			next();
		},
	},
]);

const apolloClient = new ApolloClient({
	networkInterface,
	dataIdFromObject: o => o.id,
	connectToDevTools: true,
});

export const tmpUpload = async (file, name = 'font') => {
	const data = new FormData();

	data.append('filename', name);
	data.append('data', file);

	try {
		const response = await fetch(
			'https://api.graph.cool/file/v1/ciz3x8qbba0ni0192kaicafgo',
			{
				method: 'POST',
				body: data,
			},
		);

		if (!response.ok) {
			throw new Error(`Upload failed: ${response.status} ${response.statusText}`);
		}

		const result = await response.json();
		
		if (!result.url) {
			throw new Error('Upload succeeded but no URL was returned');
		}

		return result;
	} catch (error) {
		console.error('tmpUpload error:', error);
		
		// For local development, provide a mock response
		if (!isProduction()) {
			console.warn('⚠️ Font hosting service unavailable - using mock URL for local development');
			return {
				url: `http://localhost:9000/mock-font-${Date.now()}.otf`,
				name: name,
				mock: true
			};
		}
		
		// Re-throw the error for production
		throw new Error(`Font upload service is currently unavailable: ${error.message}`);
	}
};

export default apolloClient;
