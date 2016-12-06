import { connect } from 'react-redux';
import { CalculatorInput } from '../components';
import { changeItem, changeNodeStep, getItemSelectOptions, getNodeStepSelectOptions } from '../modules/calculator';

const mapStateToProps = (state) => {
    return {
        selectedItemHash: state.calculator.selectedItemHash,
        itemSelectOptions: getItemSelectOptions(state),
        nodeStepSelectOptions: getNodeStepSelectOptions(state),
        selectedNodeStepHashes: state.calculator.selectedNodeStepHashes
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeItem: (itemHash) => {
            dispatch(changeItem({ itemHash }));
        },
        onChangeNodeStep: (index, stepHash) => {
            dispatch(changeNodeStep({ index, stepHash }));
        }
    };
};

export const CalculatorInputView = connect(
    mapStateToProps,
    mapDispatchToProps
)(CalculatorInput);

export default CalculatorInputView;
