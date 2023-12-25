import { configureStore } from '@reduxjs/toolkit';

import postSliceReducer from './reducers/postSlice';
import numberReducer from './reducers/numberSlice';

// me store eke ee keyvalues wala ee slice eke initial state eka thiynwa...psse selector function eken access krnne meken
const store = configureStore({
  reducer: { post: postSliceReducer, number: numberReducer },
});

export default store;
