import { configureStore } from '@reduxjs/toolkit';

import TodoReducer from '../slice/ContactSlice';
// ...

export const store = configureStore({
  reducer: { contact: TodoReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
