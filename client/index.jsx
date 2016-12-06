import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import reducers from './reducers';
import routes from './routes';
import entities from './modules/entities';
import { createInjectStore } from 'redux-injector';

const loggerMiddleware = createLogger();

const store = createInjectStore(
    { ...reducers, entities },
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

const history = syncHistoryWithStore(browserHistory, store);
const rootRoute = routes(store);

ReactDOM.render(
    <Provider store={ store }>
        <Router routes={ rootRoute } history={ history }/>
    </Provider>,
    document.getElementById('root')
);