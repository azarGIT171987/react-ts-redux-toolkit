import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, selectedCount } from './store/counterSlice';

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
    </div>
  );
};

export default Counter;
