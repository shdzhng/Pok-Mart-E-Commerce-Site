import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: { search: 'search', results: 'results' },
  reducers: {
    lookup: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { lookup } = searchSlice.actions;
export const results = (state) => state.results;

export default searchSlice.reducer;
