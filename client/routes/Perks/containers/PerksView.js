import { connect } from 'react-redux';
import { Perks } from '../components';
import { getPerksTable } from '../modules/perks';

const mapStateToProps = (state) => {
    return {
        perksTable: getPerksTable(state)
    };
};

export const PerksView = connect(
    mapStateToProps
)(Perks);

export default PerksView;
