import { useState } from 'react'
import './Counter.css'
import CounterButton from './CounterButton';

export default function Counter(){
    const [count, setCount] = useState(0);

    function incrementParent(by){
        setCount(count + by)
    }

    function decrementParent(by){
        setCount(count - by)
    }

   function reset(){
    setCount(0)
   }

   

    return(
        <>
        <span className="count">{count}</span>
        <CounterButton by={1} incrementMethod={incrementParent} decrementMethod={decrementParent} reset={reset}/>
        <CounterButton by={2} incrementMethod={incrementParent}  decrementMethod={decrementParent} reset={reset}/>
        <CounterButton by={5} incrementMethod={incrementParent}  decrementMethod={decrementParent} reset={reset}/>
       
       
        <button className="reset"  onClick={reset} >Reset</button> 
        </>
    )
}

