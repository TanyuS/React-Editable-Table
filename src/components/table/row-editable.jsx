import React, {PureComponent} from 'react';

import block from 'bem-cn-lite';

const b = block('stats-table');

class RowEditable extends PureComponent {
	render() {
		const {fields, updateFields, saveChanges} = this.props;
		const {date, networkName, requests, clicks, impressions} = fields;

		return (
			<tr className={b("row")}>
				<td className={b("ele")}>
					{date}
				</td>
				<td className={b("ele")}>
					{networkName}
				</td>
				<td className={b("ele")}>
					<input value={requests} onChange={e => updateFields({name: 'requests', value: e.target.value})}/>
				</td>
				<td className={b("ele")}>
					<input value={clicks} onChange={e => updateFields({name: 'clicks', value: e.target.value})}/>
				</td>
				<td className={b("ele")}>
					<input value={impressions} onChange={e => updateFields({name: 'impressions', value: e.target.value})}/>
				</td>
				<td className={b("button-change")}>
					<button onClick={saveChanges}>Сохранить</button>
				</td>
			</tr>
		);
	}
}
export default RowEditable;
