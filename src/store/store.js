import { configureStore } from '@reduxjs/toolkit';
import numberSliceReducer from './reducers/numberSlice';
import laptopSliceReducer from './reducers/laptopSlice';

// mekt ekak eka slices wala thiyana reducers eka thanaktr gnnwa
const store = configureStore({
  reducer: {
    // slice eken export krpu reducer methnt import krnwea
    numberSlice: numberSliceReducer,
    laptopSlice: laptopSliceReducer,
  },
});

export default store;
