import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import feedReducer from './reducers';

const rootReducer = combineReducers({
  feedReducer: feedReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});