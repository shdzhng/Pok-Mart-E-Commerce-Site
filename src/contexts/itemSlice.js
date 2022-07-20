import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const POKEAPI_URL = 'https://pokeapi.co/api';

export const fetchItemByName = createAsyncThunk();
// 'items/fetchItemsByCategory',
// async (name) => {
//   const formattedName = name.toLowerCase().split(' ').join('-');
//   const returnedList = await fetch(
//     `${POKEAPI_URL}/v2/item-category/${formattedName}`,
//     { method: 'get' }
//   )
//     .then((res) => res.json())
//     .then(async (resJson) => {
//       return Promise.all(
//         resJson.items.map((item) => {
//           return fetch(item.url, { method: 'get' })
//             .then((res) => res.json())
//             .then((resJson) => {
//               return resJson;
//             });
//         })
//       );
//     });

//   return returnedList;
// }

export const itemSlice = createSlice({
  name: 'details',
  initialState: {
    info: {},
    status: null,
  },
  extraReducers: {
    [fetchItemByName.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchItemByName.fulfilled]: (state, action) => {
      state.status = 'success';
      state.items = action.payload;
    },
    [fetchItemByName.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export default itemSlice.reducer;
