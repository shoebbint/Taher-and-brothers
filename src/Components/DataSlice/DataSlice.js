// dataSlice.js
import { createSlice } from '@reduxjs/toolkit';

const DataSlice = createSlice({
  name: 'data',
  initialState: null,
  reducers: {
    setData: (state, action) => {
      return action.payload;
    },
  },
});

export const { setData } = DataSlice.actions;
export default DataSlice.reducer;


