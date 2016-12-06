import fetch from 'isomorphic-fetch';
import { createAction } from 'redux-actions';

export const requestItemCategories = createAction('itemCategories/REQUEST');
export const receiveItemCategories = createAction('itemCategories/RECEIVE');

const shouldFetchItemCategories = (state) => {
    const { itemCategories } = state.entities;
    return !itemCategories.lastUpdated && !itemCategories.isFetching;
};

export const fetchMultipliers = () => (dispatch, getState) => {
    if(shouldFetchItemCategories(getState())) {
        dispatch(requestItemCategories());

        return fetch('/api/itemCategories')
            .then(response => response.json())
            .then(json => {
                dispatch(receiveItemCategories({ itemCategories: json, receivedAt: Date.now() }));
            });
    }
};