import fetch from 'isomorphic-fetch';
import { createAction } from 'redux-actions';

export const requestNodeSteps = createAction('nodeSteps/REQUEST');
export const receiveNodeSteps = createAction('nodeSteps/RECEIVE');

const shouldFetchNodeSteps = (state) => {
    const { nodeSteps } = state.entities;
    return !nodeSteps.lastUpdated && !nodeSteps.isFetching;
};

export const fetchPerks = () => (dispatch, getState) => {
    if(shouldFetchNodeSteps(getState())) {
        dispatch(requestNodeSteps());

        return fetch('/api/nodeSteps')
            .then(response => response.json())
            .then(json => {
                dispatch(receiveNodeSteps({ nodeSteps: json, receivedAt: Date.now() }));
            });
    }
};