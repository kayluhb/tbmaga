import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';

const reducers = require('./modules/reducers');

function isDevToolsClient() {
  return __DEVELOPMENT__ && __CLIENT__ && __DEVTOOLS__;
}

function isHot() {
  return __DEVELOPMENT__ && module.hot;
}

function applyDevTools(middleware) {
  const { persistState } = require('redux-devtools');
  const DevTools = require('../containers/DevTools/DevTools');

  return compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  )(_createStore);
}

function actualCreateStore(history) {
  const middleware = [routerMiddleware(history)];

  return isDevToolsClient() ? applyDevTools(middleware) : applyMiddleware(...middleware)(_createStore);
}

function store(createFunc, initialState) {
  const storeObject = createFunc(reducers, initialState);

  if (isHot()) {
    module.hot.accept('./modules/reducers', () => {
      storeObject.replaceReducer(reducers);
    });
  }
  return storeObject;
}

export default function createStore(history, initialState) {
  return store(actualCreateStore(history), initialState);
}

