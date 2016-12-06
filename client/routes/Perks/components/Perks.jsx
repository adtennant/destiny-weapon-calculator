import React from 'react';
import { DataTable } from 'components';

export const Perks = ({ perksTable }) => (
    <DataTable data={ perksTable }/>
);

Perks.propTypes = {
    perksTable: DataTable.PropTypes.Table
};

export default Perks;