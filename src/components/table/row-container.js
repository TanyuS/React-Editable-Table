import compose from 'recompact/compose';
import withHandlers from 'recompact/withHandlers';
import withReducer from 'recompact/withReducer';

import Row from './row';

const enhance = compose(
	withReducer(
		'fields',
		'updateFields',
		(state, action) => {
			const {name, value} = action;

			return Object.assign({}, state, {[name]: value});
		},
		props => ({
			date: props.date || '',
			networkName: props.networkName || '',
			requests: props.requests || '',
			clicks: props.clicks || '',
			impressions: props.impressions || ''
		})
	),
	withHandlers({
		updateMode: props => () => {
			const {id, isChanging, updateMode} = props;

			updateMode(id, !isChanging);
		},
		saveChanges: props => () => {
			const {id, fields, saveChanges} = props;

			saveChanges(id, fields);
		}
	})
);

export default enhance(Row);
