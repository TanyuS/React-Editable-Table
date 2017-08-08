import React, {Component} from 'react';
import TableRow from './row-container';
import block from 'bem-cn-lite';

const b = block('stats-table');

class Table extends Component {
    render() {
        const {list, updateMode, saveChanges} = this.props;
        return (
            <table className={b}>
                <tbody>
                {
                    list.map(el => (
                        <TableRow
                            key={el.id}
                            id={el.id}
                            date={el.date}
                            networkName={el.networkName}
                            requests={el.requests}
                            clicks={el.clicks}
                            impressions={el.impressions}
                            isChanging={el.isChanging}
                            updateMode={updateMode}
                            saveChanges={saveChanges}
                        />
                    ))
                }
                </tbody>
            </table>
        );
    }
}

export default Table;
