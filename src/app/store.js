import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../contexts/userSlice';
import categorySliceReducer from '../contexts/categorySlice';

export const store = configureStore({
  reducer: {
    categoryItems: categorySliceReducer,
    users: usersReducer,
  },
});
