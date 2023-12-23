import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  number: 0,
  computers: [],
};

// slice eken wena wenama inn reducer ekt ekthu krla eka reducer ekenk hdnwa
const numberSlice = createSlice({
  // slice have uniques name to identify
  name: 'number',

  // slic ehave innitial state
  initialState,
  // rducers kiynne action eken action ekata wena wenama reducersla inna nisa
  reducers: {
    // eka action ekt adalawa eka reducer ekai thiyenne
    // meke () warahan deka  one na
    // prev state eka spred krla change krnn one na
    // meke thiyenw JS Immer kiyla libry ekak ekata api liyna me code eka gihin changes wela thma enne ai ...state kiyl dnn one na
    // varible ekaka value ekak change krnwa wge state update krnn puluwan widiyata thma meka hdla thiyenne
    /*

    old code
    
    increment: (state, action) => ({
      number: state.number + action.payload,
    }),

    decrement: (state, action) => ({
      number: state.number - action.payload,
    }),
    */

    // new code
    increment: (state, action) => {
      state.number += action.payload;
    },

    decrement: (state, action) => {
      state.number -= action.payload;
    },
  },
});

// methnanin actions tika export krnwa
export const { increment, decrement } = numberSlice.actions;

// ee hdna eka reducer thama methnin export krnne store ekt
export default numberSlice.reducer;
