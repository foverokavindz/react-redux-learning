import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: {
      reducer: (state, action) => {
        const id = action.payload.id;
        const tempObj = state.find((el) => el.id === id);

        if (tempObj) {
          tempObj.count += 1;
        } else {
          state.push(action.payload);
        }
      },
      prepare: (id, cpu, ram, price) => ({
        payload: {
          id,
          cpu,
          ram,
          price,
          count: 1,
        },
      }),
    },

    removeItemFromCart: (state, action) => {
      const index = state.indexOf(action.payload);

      state.splice(index, 1);
    },

    removeOneItemFromCart: (state, action) => {
      const id = action.payload;
      const tempObj = state.find((el) => el.id === id);
      const index = state.indexOf(tempObj);

      if (tempObj) {
        tempObj.count -= 1;
        if (tempObj.count === 0) {
          state.splice(index, 1);
        }
      }
    },
    clearCart: (state, action) => {
      state.splice(0, state.length);
    },
  },
});

export const selectCart = (store) => store.cart;

export const {
  addItemToCart,
  removeItemFromCart,
  removeOneItemFromCart,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
