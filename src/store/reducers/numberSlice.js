import {
  createAction,
  createAsyncThunk,
  createReducer,
  createSelector,
} from '@reduxjs/toolkit';

// meke actions tika wenama reducersla wenama hdnwa
const initialState = {
  number: 0,
  users: [],
};

//action creators
export const increment = createAction(
  'number-increment',
  (name, value, city) => {
    return {
      payload: {
        name,
        value,
        city,
      },
    };
  }
);
export const decrement = createAction('number-decrement');

export const getUsers = createAsyncThunk('number/getUseres', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  if (Array.isArray(data)) {
    return data;
  } else {
    return { err: 'some error' };
  }
});

const numberReducer = createReducer(initialState, (builder) => {
  builder.addCase(increment, (state, action) => {
    state.number += action.payload;
  });

  builder.addCase(decrement, (state, action) => {
    state.number -= action.payload;
  });
  builder.addCase(getUsers.fulfilled, (state, action) => {
    state.users = action.payload;
  });
});

// samanaya selecter eka store eke kohe thibunath trigger wenwa
// ekata createSelecter eken denwa
const numberSel = (store) => store.number.number;
const postSel = (store) => store.post;

// mulin denne dependency array eka,next callback func eka
//target krla thiyna thana withrk wenas unoth meka trigger wenawa
// arraya eke watena action piliweltma parameters widiyt gnn puluwan anonymous function ekt
/// awys nthuwa render wena eka adukrgn puluwan
export const numberSelector = createSelector(
  [numberSel, postSel],
  (num, post) => {
    return num;
  }
);
export default numberReducer;
