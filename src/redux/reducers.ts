import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import store from './store';

const rootReducer = combineReducers({
    counter: counterReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export default rootReducer;