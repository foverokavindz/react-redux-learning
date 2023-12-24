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
      const index = state.indexOf(action.payload);

      state[index].count -= 1;
    },
  },
});

export const selectCart = (store) => store.cart;

export const { addItemToCart, removeItemFromCart, removeOneItemFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
