import { injectReducer } from 'redux-injector';
import Promise from 'bluebird';

export default ({ dispatch, getState }) => ({
    path: 'calculator',
    getComponent (nextState, cb) {
        require.ensure([], (require) => {
            const calculator = require('./modules/calculator');
            const entities = require('modules/entities');

            injectReducer('calculator', calculator.default);

            Promise.all([
                dispatch(entities.fetchMultipliers()),
                dispatch(entities.fetchPerks()),
                dispatch(entities.fetchStats()),
                dispatch(entities.fetchWeapons())
            ])
            .then(() => {
                const items = entities.getItemsSortedByName(getState());
                dispatch(calculator.changeItem({ itemHash: items[0].itemHash.toString() }));

                cb(null, require('./components/Calculator').default);
            });
        }, 'calculator');
    }
});