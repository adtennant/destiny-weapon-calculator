import React, { PropTypes } from 'react';
import { Form, FormGroup, Select } from 'components';

export const CalculatorInput = ({ selectedItemHash, itemSelectOptions, onChangeItem, selectedNodeStepHashes, nodeStepSelectOptions, onChangeNodeStep }) => (
    <Form>
        <FormGroup>
            <label htmlFor="item-select">Weapon</label>
            <Select id="item-select" selected={ selectedItemHash } options={ itemSelectOptions } onChange={ onChangeItem }/>
        </FormGroup>
        { nodeStepSelectOptions.map((options, index) => {
            return <FormGroup key={ index }>
                <label htmlFor={ `node-step-select-${index}` }>{ `Node ${index + 1}` }</label>
                <Select id={ `node-step-select-${index}` } selected={ selectedNodeStepHashes[index] } options={ options } onChange={ id => onChangeNodeStep(index, id) }/>
            </FormGroup>;
        }) }
    </Form>
);

CalculatorInput.propTypes = {
    selectedItemHash: PropTypes.string,
    itemSelectOptions: Select.PropTypes.Options.isRequired,
    onChangeItem: PropTypes.func.isRequired,
    selectedNodeStepHashes: PropTypes.arrayOf(PropTypes.string),
    nodeStepSelectOptions: PropTypes.arrayOf(Select.PropTypes.Options).isRequired, 
    onChangeNodeStep: PropTypes.func.isRequired
};

export default CalculatorInput;

