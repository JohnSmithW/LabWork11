import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import app from './reducers/reducers';

const store = createStore(app, devToolsEnhancer());

export default store;
