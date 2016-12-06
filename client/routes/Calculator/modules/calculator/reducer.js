import { handleActions } from 'redux-actions';
import { changeNodeStep, changeItem } from './actions';

const MAX_NODE_STEPS = 10;

export default handleActions({
    [changeNodeStep]: (state, action) => {
        const newNodeSteps = [ ...state.selectedNodeStepHashes ];
        newNodeSteps[action.payload.index] = action.payload.stepHash;

        return {
            ...state,
            selectedNodeStepHashes: newNodeSteps
        };
    },
    [changeItem]: (state, action) => ({ 
        ...state,
        selectedItemHash: action.payload.itemHash,
        selectedNodeStepHashes: new Array(MAX_NODE_STEPS).fill('0')
    })
}, { 
    selectedItemHash: '0',
    selectedNodeStepHashes: new Array(MAX_NODE_STEPS).fill('0')
});


