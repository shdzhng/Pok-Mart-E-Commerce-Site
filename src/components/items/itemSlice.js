import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const POST_URL = 'https://pokeapi.co/api/v2/';

export const fetchItemsByCategory = createAsyncThunk(
  'users/getUsers',
  async (name) => {
    const formattedName = name.toLowerCase().split(' ').join('-');
    return await fetch(
      `https://pokeapi.co/api/v2/item-category/${formattedName}`
    ).then((res) => res.json());
  }
);

export const itemSlice = createSlice({
  name: 'user',
  initialState: {
    items: [],
    status: null,
  },
  extraReducers: {
    [fetchItemsByCategory.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchItemsByCategory.fulfilled]: (state, action) => {
      state.status = 'success';
      state.items = action.payload.items;
    },
    [fetchItemsByCategory.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export default itemSlice.reducer;
