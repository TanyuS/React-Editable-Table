import React, {PureComponent} from 'react';

import block from 'bem-cn-lite';

const b = block('stats-table');

class RowReadonly extends PureComponent {
	render() {
		const {date, networkName, requests, clicks, impressions, isChanging, updateMode} = this.props;

		return (
			<tr className={b("row")} onClick={updateMode}>
				<td className={b("ele")}>
					{date}
				</td>
				<td className={b("ele")}>
					{networkName}
				</td>
				<td className={b("ele")}>
					{requests}
				</td>
				<td className={b("ele")}>
					{clicks}
				</td>
				<td className={b("ele")}>
					{impressions}
				</td>
				<td className={b("button-change")}>
					&nbsp;
				</td>
			</tr>
		);
	}
}
export default RowReadonly;
