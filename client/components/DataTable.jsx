import React, { PropTypes } from 'react';
import { Table } from 'components';

export const DataTable = ({ data }) => (
    <Table responsive>
        <thead> 
            <tr>
                { data.headers.map((value, index) => (<th className="text-center" scope="col" key={ index }>{ value }</th>)) }
            </tr>
        </thead>
        <tbody> 
            { data.rows.map((row, index) => (
                <tr key={ index }>
                    { row.map((value, index) => {
                        if(index === 0) return <th scope="row" key={ index }>{ value }</th>;
                        else return <td className="text-center" key={ index }>{ value }</td>;
                    }) }
                </tr>
            )) }
        </tbody>
    </Table>
);

DataTable.PropTypes = {
    Table: PropTypes.shape({
        headers: PropTypes.arrayOf(PropTypes.string).isRequired,
        rows: PropTypes.arrayOf(
            PropTypes.arrayOf(
                PropTypes.oneOfType([ 
                    PropTypes.string, 
                    PropTypes.number 
                ])
            )
        ).isRequired
    })
};

DataTable.propTypes = {
    data: DataTable.PropTypes.Table
};

DataTable.defaultProps = {
    data: { headers: [], rows: [] }
};

export default DataTable;