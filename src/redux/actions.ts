import { createAction } from '@reduxjs/toolkit';
import { increment as incrementAction } from './counterSlice';
import { decrement as decrementAction } from './counterSlice';

export const increment = createAction<number>('counter/increment');
export const decrement = createAction<number>('counter/decrement');

export { incrementAction, decrementAction };