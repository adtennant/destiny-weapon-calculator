import { createSelector } from 'reselect';
import { getDisplayedStats, getItemCategoriesSortedByTitle } from 'modules/entities';

export const getMultipliersTable = createSelector(
    [ getDisplayedStats, getItemCategoriesSortedByTitle ],
    (displayedStats, itemCategoriesSortedByTitle) => ({ 
        headers: [ 'Name', ...displayedStats.map(stat => stat.statName) ], 
        rows: itemCategoriesSortedByTitle.map(category => [ 
            category.title,
            ...displayedStats.map(stat => category.multipliers[stat.statHash] ? category.multipliers[stat.statHash] : '-') 
        ]) 
    })
);