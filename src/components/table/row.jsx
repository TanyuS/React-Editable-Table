import React, {PureComponent} from 'react';

import block from 'bem-cn-lite';

const b = block('stats-table');

class TableRow extends PureComponent {
    render() {
        const {id, date, networkName, requests, clicks, impressions, isChanging, updateState} = this.props;

        return (
            <tr className={b("row")}>
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
            </tr>
        );
    }
}
export default TableRow;
