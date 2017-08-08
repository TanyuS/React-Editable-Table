import React from 'react';

import RowEditable from './row-editable';
import RowReadonly from './row-readonly';

const Row = props => (
	props.isChanging ? <RowEditable {...props}/> : <RowReadonly {...props}/>
);

export default Row;
