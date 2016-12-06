import { createSelector } from 'reselect';

export const getItemsByHash = (state) => state.entities.items.byHash;

export const getItemsSortedByName = createSelector(
    [ getItemsByHash ],
    (itemsByHash) => Object.values(itemsByHash)
        .sort((a, b) => a.itemName.localeCompare(b.itemName))
);
