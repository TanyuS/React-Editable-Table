import React, {Component} from 'react';
import TableRow from './row';
import block from 'bem-cn-lite';

const b = block('stats-table');

class Table extends Component {
    render() {
        const {list, updateState} = this.props;
        console.log(list, this.props);
        return (
            <table className={b}>
                {
                    list.map(el => (
                        <TableRow
                            key={el.id}
                            id={el.id}
                            networkName={el.networkName}
                            requests={el.requests}
                            clicks={el.clicks}
                            impressions={el.impressions}
                            isChanging={el.isChanging}
                            updateState={updateState}
                        />
                    ))
                }
            </table>
        );
    }
}

export default Table;
