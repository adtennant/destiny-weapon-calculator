import { CoreLayout } from 'layouts';

import Calculator from './Calculator';
import Multipliers from './Multipliers';
import Perks from './Perks';
import Weapons from './Weapons';
import Changelog from './Changelog';

export const routes = (store) => {
    const { path, ...indexRoute } = Calculator(store); // eslint-disable-line no-unused-vars

    return [{
        path: '/',
        component: CoreLayout,
        indexRoute: indexRoute,
        childRoutes: [
            Calculator(store),
            Multipliers(store),
            Perks(store),
            Weapons(store),
            Changelog(store)
        ]
    }];
};

export default routes;