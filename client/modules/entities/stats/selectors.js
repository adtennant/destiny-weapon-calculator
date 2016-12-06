import { createSelector } from 'reselect';
import { DISPLAYED_STATS } from './consts';

export const getStatsByHash = (state) => state.entities.stats.byId;

export const getDisplayedStats = createSelector(
    [ getStatsByHash ],
    (statsByHash) => DISPLAYED_STATS
        .map(statHash => statsByHash[statHash])
        .filter((stat) => !!stat) // Hack, stops the calculator falling over before stats are loaded 
);
