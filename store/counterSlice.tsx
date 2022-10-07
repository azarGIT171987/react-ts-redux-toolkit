import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const selectedCount = (state: { counter: { count: any } }) =>
  state.counter.count;
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
