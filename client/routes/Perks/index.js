export default ({ dispatch }) => ({
    path: 'perks',
    getComponent (nextState, cb) {
        require.ensure([], (require) => {
            const entities = require('modules/entities');

            Promise.all([
                dispatch(entities.fetchPerks()),
                dispatch(entities.fetchStats())
            ]).then(() => {
                cb(null, require('./containers/PerksView').default);
            });
        }, 'perks');
    }
});