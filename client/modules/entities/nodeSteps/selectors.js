import { createSelector } from 'reselect';

export const getNodeStepsByHash = (state) => state.entities.nodeSteps.byHash;

export const getNodeStepsSortedByName = createSelector(
    [ getNodeStepsByHash ],
    (nodeStepsByHash) => Object.values(nodeStepsByHash)
        .sort((a, b) => a.nodeStepName.localeCompare(b.nodeStepName))
);
