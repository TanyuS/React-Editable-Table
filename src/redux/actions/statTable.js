import stats from './mock-data/stats.json';

export const STAT_LOADING = 'STAT_LOADING';
export const STAT_SUCCESS = 'STAT_SUCCESS';
export const STAT_ERROR = 'STAT_ERROR';
export const STAT_UPDATE = 'STAT_UPDATE';
export const STAT_STORE_LOADING = 'STAT_STORE_LOADING';
export const STAT_STORE_SUCCESS = 'STAT_STORE_SUCCESS';
export const STAT_STORE_ERROR = 'STAT_STORE_ERROR';

export function updateRow(id, data) {
	return {
		type: STAT_UPDATE,
		id,
		data
	};
}

export function storeRow(id, data) {
	return function (dispatch) {
		return dispatch({
			url: `/api/stats/${id}`,
			method: 'put',
			data,
			types: [STAT_STORE_SUCCESS, STAT_STORE_LOADING, STAT_STORE_ERROR]
		}).catch(err => {});
	};
}

export function fetchTable() {
	return {
		type: STAT_SUCCESS,
		body: {
			list: stats
		}
	};
}

