import { connect } from 'react-redux';
import { Weapons } from '../components';
import { getWeaponsTable } from '../modules/weapons';

const mapStateToProps = (state) => {
    return {
        weaponsTable: getWeaponsTable(state)
    };
};

export const WeaponsView = connect(
    mapStateToProps
)(Weapons);

export default WeaponsView;
