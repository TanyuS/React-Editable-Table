import {connect} from 'react-redux';
import compose from 'recompact/compose';
import lifecycle from 'recompact/lifecycle';
import omitProps from 'recompact/omitProps';
import Table from './table';
import {fetchTable, updateRow, storeRow} from '../../redux/actions/statTable';

function mapStateToProps(state) {
	return state.stat;
}

function mapDispatchToProps(dispatch) {
	return {
		doFetch() {
			dispatch(fetchTable());
		},
		updateMode(id, isChanging) {
			dispatch(updateRow(id, {isChanging}));
		},
		saveChanges(id, fields) {
			const data = Object.assign({isChanging: false}, fields);

			dispatch(updateRow(id, data));
			dispatch(storeRow(id, data));
		}
	};
}

const enhance = compose(
	connect(mapStateToProps, mapDispatchToProps),
	lifecycle({
		componentDidMount() {
			this.props.doFetch();
		}
	}),
	omitProps(['doFetch'])
);

export default enhance(Table);
