import entities from './modules/entities';
import { routerReducer } from 'react-router-redux';

export const reducers = {
    entities,
    routing: routerReducer
};

export default reducers;