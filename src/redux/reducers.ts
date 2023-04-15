import { combineReducers } from '@reduxjs/toolkit';
import postsReducer from './apiSlice';
import store from './store';

const rootReducer = combineReducers({
    posts: postsReducer
});

export type RootState = ReturnType<typeof store.getState>;

export default rootReducer;