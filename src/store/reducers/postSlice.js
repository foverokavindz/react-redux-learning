import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: 'idle', // pending , success, error
  error: null,
};

// redux athule asyc code liynne mehemai
// methanin eka data object eka thma action.payload eka widiyuata pass wenne
// thunk kiynne middleware ekak
export const getPost = createAsyncThunk('getPost', async (id) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();

    if (data) {
      return data;
    } else {
      return { err: 'some Error' };
    }
  } catch (error) {}
});

// data load,pending,unsecces unama run wenna external functions

const postSlice = createSlice({
  name: 'post-slice',
  initialState,
  reducers: {},

  // me extra reducers walin eka data tika ekka wda krnn nomal reducer function hadanna one kalin wage
  extraReducers: (builder) => {
    builder.addCase(getPost.pending, (state, action) => {
      state.loading = 'pending';
    });
    // addcase eken denne action creater eka
    // builder kiynne meke thiyna ekak - eka parameter ekk widiyta pass kra
    // action eke states thiyenwa - fulfilled,rejected,pending
    // fullfilled eke sampurnayen action eka pass nm thma wade wenne

    // anith parameter eka denne reducer function eka
    builder.addCase(getPost.fulfilled, (state, action) => {
      // meketh immer function thiyenwa
      // mekedi eliyen kriyathmaka wena functions wala  output eka object ekak widiyt enwa
      //ewa access krna recommonded widiy thama bguiklder function ekak hraha access krn eka

      state.loading = 'completed'; // me tika dn state ekata set wenwa
      state.data = action.payload;
    });

    builder.addCase(getPost.rejected, (state, action) => {
      state.loading = 'rejected';
      state.error = 'Some Error from rejected';
    });
  },
});

export const selectAllPost = (store) => store.post;
export default postSlice.reducer;
