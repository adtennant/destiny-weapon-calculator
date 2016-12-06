import { combineReducers } from 'redux';
import itemCategories from './itemCategories/reducer';
import items from './items/reducer';
import nodeSteps from './nodeSteps/reducer';
import stats from './stats/reducer';

export default combineReducers({
    itemCategories,
    items,
    nodeSteps,
    stats
});


