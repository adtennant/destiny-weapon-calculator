import fetch from 'isomorphic-fetch';
import { createAction } from 'redux-actions';

export const requestStats = createAction('stats/REQUEST');
export const receiveStats = createAction('stats/RECEIVE');

const shouldFetchStats = (state) => {
    const { stats } = state.entities;
    return !stats.lastUpdated && !stats.isFetching;
};

export const fetchStats = () => (dispatch, getState) => {
    if(shouldFetchStats(getState())) {
        dispatch(requestStats());

        return fetch('/api/stats')
            .then(response => response.json())
            .then(json => {
                dispatch(receiveStats({ stats: json, receivedAt: Date.now() }));
            });
    }
};