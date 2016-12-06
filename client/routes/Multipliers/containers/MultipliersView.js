import { connect } from 'react-redux';
import { Multipliers } from '../components';
import { getMultipliersTable } from '../modules/multipliers';

const mapStateToProps = (state) => {
    return {
        multipliersTable: getMultipliersTable(state)
    };
};

export const MultipliersView = connect(
    mapStateToProps
)(Multipliers);

export default MultipliersView;
