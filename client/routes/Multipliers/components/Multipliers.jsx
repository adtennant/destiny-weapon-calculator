import React from 'react';
import { DataTable } from 'components';

export const Multipliers = ({ multipliersTable }) => (
    <DataTable data={ multipliersTable }/>
);

Multipliers.propTypes = {
    multipliersTable: DataTable.PropTypes.Table.isRequired
};

export default Multipliers;