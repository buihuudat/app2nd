import {configureStore} from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import followSlice from './slices/followSlice';

export const store = configureStore({
  reducer: {
    users: userSlice,
    follows: followSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
