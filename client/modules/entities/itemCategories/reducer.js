import { handleActions } from 'redux-actions';
import { requestItemCategories, receiveItemCategories } from './actions';

export default handleActions({
    [requestItemCategories]: (state) => ({ 
        ...state, 
        isFetching: true
    }),
    [receiveItemCategories]: (state, action) => ({
        ...state,
        isFetching: false,
        byHash: action.payload.itemCategories,
        lastUpdated: action.payload.receivedAt
    })
}, {
    isFetching: false,
    byHash: {}
});