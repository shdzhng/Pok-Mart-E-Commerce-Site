import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import itemSliceReducer from '../components/items/itemSlice';
import usersReducer from '../components/items/userSlice';

export const store = configureStore({
  reducer: {
    items: itemSliceReducer,
    users: usersReducer,
  },
});
