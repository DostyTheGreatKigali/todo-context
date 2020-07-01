import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import allreducers from './reducers'

const initialState = {};

const middleware = [thunk];

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    allreducers, 
    initialState, 
    storeEnhancers(applyMiddleware(...middleware))
    );

export default store;