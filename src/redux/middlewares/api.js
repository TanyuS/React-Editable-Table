import request from 'superagent';

const BASE_URL = process.env.NODE_ENV === 'production' ? '' : 'http://127.0.0.1:8080';

function buildUrl(url) {
	return `${BASE_URL}${url}`;
}

function buildErrorObject(exception) {
	const {response} = exception;

	if (response) {
		const {body, error, status} = response;

		if (body && body.error) {
			return {
				message: body.error,
				status
			};
		}

		if (error) {
			return {
				message: error.message,
				status
			};
		}
	}

	return {
		message: exception.message || 'Unknown error'
	};
}

// eslint-disable-next-line no-unused-vars
export default store => next => action => {
	const {
		method,
		url,
		dataType = 'json',
		data,
		headers,
		types = [],
		postTransform, // successful response can be transformed
		postProcess, // successful response can be additionally processed, for example, to load linked resources
		extras = {} // properties, which will be passed to the next actions
	} = action;

	if (typeof url === 'undefined' || typeof method === 'undefined') {
		return next(action);
	}

	const [successType, progressType, failedType] = types;
	const token = store.getState().auth.token;

	if (progressType) {
		next(Object.assign({}, extras, {type: progressType}));
	}

	const req = request[method](buildUrl(url))
		.type(dataType)
		.set({Authorization: `Bearer ${token}`});

	if (headers) {
		req.set(headers);
	}

	if (data) {
		if (method === 'get') {
			req.query(data);
		} else {
			req.send(data);
		}
	}

	return req
		.then(res => (
			postTransform ? Promise.resolve(postTransform(res)) : res
		))
		.then(res => (
			postProcess ? Promise.resolve(postProcess(res)).then(() => res) : res
		))
		.then(res => {
			const {body, headers: resHeaders} = res;

			if (successType) {
				next(Object.assign({}, extras, {
					type: successType,
					body,
					headers: resHeaders
				}));
			}

			return res;
		})
		.catch(exception => {
			if (failedType) {
				next(Object.assign({}, extras, {
					type: failedType,
					error: buildErrorObject(exception)
				}));
			}

			return Promise.reject(exception);
		});
};
