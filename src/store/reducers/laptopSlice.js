import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    price: 150000,
    cpu: 'i3',
    ram: '8 GB',
  },
  {
    id: 12,
    price: 450000,
    cpu: 'i9',
    ram: '32 GB',
  },
  {
    id: 13,
    price: 1250000,
    cpu: 'i9 K',
    ram: '50 GB',
  },
];

const laptopSlice = createSlice({
  name: 'laptop',
  initialState,
  reducers: {
    addLaptop: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const selectLaptop = (store) => store.laptop;
export const { addLaptop } = laptopSlice.actions;
export default laptopSlice.reducer;
