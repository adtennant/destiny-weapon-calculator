import { handleActions } from 'redux-actions';
import { requestStats, receiveStats } from './actions';

export default handleActions({
    [requestStats]: (state) => ({ 
        ...state, 
        isFetching: true
    }),
    [receiveStats]: (state, action) => ({
        ...state,
        isFetching: false,
        byId: action.payload.stats,
        lastUpdated: action.payload.receivedAt
    })
}, {
    isFetching: false,
    byId: {}
});


