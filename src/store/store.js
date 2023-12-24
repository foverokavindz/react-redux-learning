import { configureStore } from '@reduxjs/toolkit';
import numberSliceReducer from './reducers/numberSlice';
import laptopSliceReducer from './reducers/laptopSlice';
import number2SliceReducer from './reducers/number2Slice';

// mekt ekak eka slices wala thiyana reducers eka thanaktr gnnwa
const store = configureStore({
  reducer: {
    // slice eken export krpu reducer methnt import krnwea
    numberSlice: numberSliceReducer,
    laptopSlice: laptopSliceReducer,
    number2Slice: number2SliceReducer,
  },
});

export default store;
