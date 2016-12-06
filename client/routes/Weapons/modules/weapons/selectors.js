import { createSelector } from 'reselect';
import { getDisplayedStats, getItemsSortedByName, getItemCategoriesByHash } from 'modules/entities';

export const getWeaponsTable = createSelector(
    [ getDisplayedStats, getItemsSortedByName, getItemCategoriesByHash ],
    (displayedStats, itemsSortedByName, itemCategoriesByHash) => ({ 
        headers: [ 'Name', 'Category', ...displayedStats.map(stat => stat.statName) ], 
        rows: itemsSortedByName.map(item => [ 
            item.itemName, 
            itemCategoriesByHash[item.itemCategoryHash].title, 
            ...displayedStats.map(stat => item.stats[stat.statHash] ? item.stats[stat.statHash].value : '-') 
        ]) 
    })
);