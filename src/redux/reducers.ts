import { combineReducers } from '@reduxjs/toolkit';
import apiReducer from './apiSlice';
import store from './store';

const rootReducer = combineReducers({
    api: apiReducer
});

export type RootState = ReturnType<typeof store.getState>;

export default rootReducer;