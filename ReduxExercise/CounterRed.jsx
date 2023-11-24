import React from "react";
import { useSelector, useDispatch } from "react-redux";
function Counter() {
    const Counter = useSelector((state) => state);
    const Dispatch = useDispatch();
    // action type
    const INCREMENT = "INCREMENT";
    const DECREMENT = "DECREMENT";

    // action creators 
    function increament(currentvalue) {
        return {
            type: INCREMENT,
            payload: currentvalue
        }
    }

    function decreament(currentvalue) {
        return {
            type: DECREMENT,
            payload: currentvalue
        }
    }

    function CounterReducer(state = 0, action) {
        switch (action.type) {
            case 'INCREMENT':
                return ++state;
            case 'DECREMENT':
                return --state;
            default:
                return state;

        }
    }

    function onIncreament() {
        Dispatch(increament());

    }

    function onDecreament() {
        Dispatch(decreament());

    }
    return (
    <>
    <p>{Counter}</p>
    <button type="button" onClick={onIncreament}>INCREAMENT</button>
    <button type="button" onClick={onDecreament}>DECREAMENT</button>

    </>
 );

}
export default Counter;
