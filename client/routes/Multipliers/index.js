export default ({ dispatch }) => ({
    path: 'multipliers',
    getComponent (nextState, cb) {
        require.ensure([], (require) => {
            const entities = require('modules/entities');

            Promise.all([
                dispatch(entities.fetchMultipliers()),
                dispatch(entities.fetchStats())
            ]).then(() => {
                cb(null, require('./containers/MultipliersView').default);
            });
        }, 'multipliers');
    }
});