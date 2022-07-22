import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const POKEAPI_URL = 'https://pokeapi.co/api';

export const fetchItemsByCategory = createAsyncThunk(
  'items/fetchItemsByCategory',
  async (name) => {
    const formattedName = name.toLowerCase().split(' ').join('-');
    const returnedList = await fetch(
      `${POKEAPI_URL}/v2/item-category/${formattedName}`,
      { method: 'get' }
    )
      .then((res) => res.json())
      .then(async (resJson) => {
        return Promise.all(
          resJson.items.map((item) => {
            return fetch(item.url, { method: 'get' })
              .then((res) => res.json())
              .then((resJson) => {
                return resJson;
              });
          })
        );
      });

    return returnedList;
  }
);

export const fetchItemByURL = createAsyncThunk(
  'items/fetchItemByURL',
  async (url) => {
    const returnedItemData = await fetch(url, { method: 'get' }).then((res) =>
      res.json()
    );
    return returnedItemData;
  }
);

export const itemSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    itemsStatus: null,
    item: null,
    itemStatus: null,
  },
  extraReducers: {
    [fetchItemsByCategory.pending]: (state, action) => {
      state.itemsStatus = 'loading';
    },
    [fetchItemsByCategory.fulfilled]: (state, action) => {
      state.itemsStatus = 'success';
      state.items = action.payload;
    },
    [fetchItemsByCategory.rejected]: (state, action) => {
      state.itemsStatus = 'failed';
    },
    [fetchItemByURL.pending]: (state, action) => {
      state.itemStatus = 'loading';
    },
    [fetchItemByURL.fulfilled]: (state, action) => {
      state.itemStatus = 'success';
      state.item = action.payload;
    },
    [fetchItemByURL.rejected]: (state, action) => {
      state.itemStatus = 'failed';
    },
  },
});

export default itemSlice.reducer;
