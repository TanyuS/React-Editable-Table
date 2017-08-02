/**
 * Created by Soul on 02.08.2017.
 */
import {CONTACTS_SUCCESS, CONTACT_UPDATE} from '../actions/stat-table';

export default (state, action) => {
	if (!state) {
		// initial state
		return {
			list: []
		};
	}

	switch (action.type) {
		case CONTACTS_SUCCESS:
			return Object.assign({}, state, {
				list: action.body.list
			});
		case CONTACT_UPDATE:
			// имеем action.id
			// имеем action.data
			// найти state.list объек с нужным id и заменить поля из data

			const list = state.list.map(item => {
				if (item.id === action.id) {
					return Object.assign({}, item, action.data);
				}

				return item;
			});

			return Object.assign({}, state, {list});
		default:
			return state;
	}
};
