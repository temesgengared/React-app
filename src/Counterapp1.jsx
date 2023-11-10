// what to do?test our application to insure that it function as expected
// how to do?use" use state"& functional component
// create  three  buttun: "increment" and "decrement"and reset
import React, { useState } from "react";
function CounterApp () {
    let[counter,setcounter]=useState(0)
    function increment(){
        setcounter(++counter); 
        
    }
    function decrement(){
        setcounter(--counter);
    
}    
    function reset(){
        setcounter(0);
    }
    
return(
    <>
<input type="text" value={counter} name="counter"/><br/>
<button type="button" onClick={increment}>increment</button><br/>
<button type="button" onClick={decrement}>decrement</button>
<br/>
<button type="button" onClick={reset}>reset</button>
<br/>

    </>
)
}
export default CounterApp;