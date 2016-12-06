import { createSelector } from 'reselect';
import { getDisplayedStats, getNodeStepsSortedByName } from 'modules/entities';

export const getPerksTable = createSelector(
    [ getDisplayedStats, getNodeStepsSortedByName ],
    (displayedStats, nodeStepsSortedByName) => ({ 
        headers: [ 'Name', ...displayedStats.map(stat => stat.statName) ], 
        rows: nodeStepsSortedByName.map(step => [ 
            step.nodeStepName,
            ...displayedStats.map(stat => step.modifiers && step.modifiers[stat.statHash] ? step.modifiers[stat.statHash] : '-') 
        ]) 
    })
);