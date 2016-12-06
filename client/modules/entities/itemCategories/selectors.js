import { createSelector } from 'reselect';

export const getItemCategoriesByHash = (state) => state.entities.itemCategories.byHash;

export const getItemCategoriesSortedByTitle = createSelector(
    [ getItemCategoriesByHash ],
    (nodeStepsByHash) => Object.values(nodeStepsByHash)
        .sort((a, b) => a.title.localeCompare(b.title))
);