// store.js
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../Components/DataSlice/DataSlice';

const Store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default Store;
