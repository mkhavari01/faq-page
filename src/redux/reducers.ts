import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import postsReducer from './apiSlice';
import store from './store';

const rootReducer = combineReducers({
    counter: counterReducer,
    posts: postsReducer
});

export type RootState = ReturnType<typeof store.getState>;

export default rootReducer;