import CustomError from '../utils/CustomError';
import {
	parseUrl,
	getHeaders,
	convertArrayToHeaders,
	getCustomHeaders,
} from '../utils';

export default async (rawUrl, indexName) => {
	const defaultError = 'Unable to get version';
	let version = '';

	try {
		const { url } = parseUrl(rawUrl);
		const headers = getHeaders(rawUrl);

		// Main logic: Fetch `${url}/` and read `version.number`
		const res = await fetch(url, {
			headers: {
				...headers,
			},
			method: 'GET',
		}).then(response => response.json());

		if (res.status >= 400 || (res.error && res.error.code >= 400)) {
			// If error, use fallback logic
			throw new Error('Error fetching version from root endpoint');
		}

		version = res.version && res.version.number;

		if (!version) {
			// If version is not obtained, use fallback logic
			throw new Error('Version not found in root endpoint response');
		}
	} catch (error) {
		// Fallback logic
		try {
			const { url } = parseUrl(rawUrl);
			const headers = getHeaders(rawUrl);

			let fetchUrl = url;
			let fetchHeaders = {};

			if (indexName) {
				fetchUrl = `${url}/${indexName}/_settings`;
				fetchHeaders = convertArrayToHeaders(
					getCustomHeaders(indexName),
				);
			}

			const res = await fetch(fetchUrl, {
				headers: {
					...headers,
					...fetchHeaders,
				},
				method: 'GET',
			}).then(response => response.json());

			if (res.status >= 400 || (res.error && res.error.code >= 400)) {
				throw new CustomError(
					JSON.stringify(res.error, null, 2),
					`HTTP STATUS: ${res.status >= 400 ||
						(res.error && res.error.code
							? res.error.code
							: 400)} - ${defaultError}`,
				);
			}

			if (indexName) {
				const defaultIndex = Object.keys(res)[0];
				if (defaultIndex) {
					version =
						res[defaultIndex].settings.index.version.upgraded ||
						res[defaultIndex].settings.index.version.created;
				} else {
					version = '7';
				}
			} else {
				version = res.version && res.version.number;
			}

			if (!version) {
				version = '7';
			}
		} catch (fallbackError) {
			throw new CustomError(
				fallbackError.description || defaultError,
				fallbackError.message,
				fallbackError.stack,
			);
		}
	}

	// Process version to get major version number
	let majorVersion = version.split('.')[0];

	if (!majorVersion) {
		majorVersion = '7';
	}

	return majorVersion;
};
