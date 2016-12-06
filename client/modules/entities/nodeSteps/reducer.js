import { handleActions } from 'redux-actions';
import { requestNodeSteps, receiveNodeSteps } from './actions';

export default handleActions({
    [requestNodeSteps]: (state) => ({ 
        ...state, 
        isFetching: true
    }),
    [receiveNodeSteps]: (state, action) => ({
        ...state,
        isFetching: false,
        byHash: action.payload.nodeSteps,
        lastUpdated: action.payload.receivedAt
    })
}, {
    isFetching: false,
    byHash: {}
});


