import React from 'react';
import { DataTable } from 'components';

export const Weapons = ({ weaponsTable }) => (
    <DataTable data={ weaponsTable }/>
);

Weapons.propTypes = {
    weaponsTable: DataTable.PropTypes.Table
};

export default Weapons;