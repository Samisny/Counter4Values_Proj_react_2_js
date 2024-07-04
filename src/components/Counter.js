
import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { INCREMENT, DECREMENT } from '../redux/actions/types';
import { incrementAction, decrementAction, IncByValueAction, DecByValueAction } from '../redux/actions/counterActions';
import { increment, decrement, incrementByAmount, decrementByAmount } from '../redux/counterSlice';

export default function Counter() {

    // const [count, setCount] = useState(0);
    // const {count} = useSelector(state => state);  //destruction: is how to get things from an object 

    const {count} = useSelector(state => state.counter);
    const dispatch = useDispatch();
    
    console.log(count);


    const handleIncrement = () => {
        dispatch(increment());
        // setCount(count + 1 );
        // incrementAction(dispatch);
    };


    const handleDecrement = () => {
        dispatch(decrement());
        // setCount(count - 1);
        // decrementAction(dispatch);

    };


    const handleIncByValue = (vl) => {
        dispatch(incrementByAmount(vl));
        // IncByValueAction(vl, dispatch);
    };


    const handleDecByValue = () => {
        dispatch(decrementByAmount());
        // dispatch(DecByValueAction());
        // DecByValueAction(dispatch);
    };



    return (
        <div>
            <p>{count}</p>       
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={() => handleIncByValue(3)}>Increment 3 </button>
            <button onClick={handleDecByValue}>Decrement 5</button>

        </div>

    );

}; // <<<<<<<<<<<<<<<<<  ./ End of the function