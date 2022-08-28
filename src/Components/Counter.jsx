import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterDecrement, counterIncrement, counterReset } from '../redux/Actions/CounterAction';

const Counter = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    const handleCount = () => {
        dispatch(counterIncrement())
    };
    const handleDecrement = () => {
        dispatch(counterDecrement())
    };
    const handleReset = () => {
        dispatch(counterReset())
    };

    return (
        <div>
            <h3>Counter App</h3>
            <h4>Counter: {count}</h4>
            <button onClick={handleCount}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>reset</button>
        </div>
    );
};

export default Counter;