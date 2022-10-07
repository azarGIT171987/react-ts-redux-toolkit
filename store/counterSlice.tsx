import { createSlice } from '@reduxjs/toolkit';

const initState = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = initState.count;
    },
  },
});

export const selectedCount = (state: { counter: { count: any } }) =>
  state.counter.count;
export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
