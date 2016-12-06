export default ({ dispatch }) => ({
    path: 'weapons',
    getComponent (nextState, cb) {
        require.ensure([], (require) => {
            const entities = require('modules/entities');

            Promise.all([
                dispatch(entities.fetchWeapons()),
                dispatch(entities.fetchMultipliers()),
                dispatch(entities.fetchStats())
            ]).then(() => {
                cb(null, require('./containers/WeaponsView').default);
            });
        }, 'weapons');
    }
});