import fetch from 'isomorphic-fetch';
import { createAction } from 'redux-actions';

export const requestItems = createAction('items/REQUEST');
export const receiveItems = createAction('items/RECEIVE');

const shouldFetchItems = (state) => {
    const { items } = state.entities;
    return !items.lastUpdated && !items.isFetching;
};

export const fetchWeapons = () => (dispatch, getState) => {
    if(shouldFetchItems(getState())) {
        dispatch(requestItems());

        return fetch('/api/items')
            .then(response => response.json())
            .then(json => {
                dispatch(receiveItems({ items: json, receivedAt: Date.now() }));
            });
    }
};