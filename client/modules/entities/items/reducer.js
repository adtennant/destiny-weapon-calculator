import { handleActions } from 'redux-actions';
import { requestItems, receiveItems } from './actions';

export default handleActions({
    [requestItems]: (state) => ({ 
        ...state, 
        isFetching: true
    }),
    [receiveItems]: (state, action) => ({
        ...state,
        isFetching: false,
        byHash: action.payload.items,
        lastUpdated: action.payload.receivedAt
    })
}, {
    isFetching: false,
    byHash: { }
});