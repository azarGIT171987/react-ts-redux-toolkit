import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increment,
  reset,
  selectedCount,
} from './store/counterSlice';

const Counter = () => {
  const counterState = useSelector(selectedCount);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{counterState}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
