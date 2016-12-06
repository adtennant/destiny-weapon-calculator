import { connect } from 'react-redux';
import { CalculatorResults } from '../components';
import { getResults } from '../modules/calculator';

const mapStateToProps = (state) => {
    return {
        results: getResults(state)
    };
};

export const CalculatorResultsView = connect(
    mapStateToProps
)(CalculatorResults);

export default CalculatorResultsView;
