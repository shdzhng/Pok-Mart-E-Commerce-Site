import { configureStore } from '@reduxjs/toolkit';
import categorySliceReducer from '../contexts/categorySlice';

export const store = configureStore({
  reducer: {
    categoryItems: categorySliceReducer,
  },
});
