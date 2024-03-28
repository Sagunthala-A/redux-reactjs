import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { increase,decrease,reset } from '../redux/action/counterActions';

const CounterApp = () => {
    const count = useSelector((state)=>state)
    //  const count = useSelector((state) => state.counter) 
    // this for when using combineReducers()

    const dispatch = useDispatch();
  return (

    <div>
        <h1>CounterApp</h1>
        {/* {console.log(count)} */}
        <h1>Your count is : {count}</h1>
        <button onClick={()=>{dispatch(increase())}}>Increase</button>
        {/* 
        dispatch(increase(10)) ...if i call like this ...this will increase count 10
         */}
        <button onClick={()=>{dispatch(decrease())}}>Decrease</button>
        <button onClick={()=>{dispatch(reset())}}>Reset</button>
    </div>
  )
}

export default CounterApp