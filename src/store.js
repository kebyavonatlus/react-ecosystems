import { createStore, combineReducers } from 'redux';

const reducers = {};

const rootReducer = combineReducers(reducers);

export const conficureStore = () => createStore(rootReducer);