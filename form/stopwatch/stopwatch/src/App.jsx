import { useState,useEffect, useRef } from 'react'
//import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [second, setSecond] = useState(0)
  const [Min, setMin] = useState(0)
  const [hour, setHour] = useState(0)
  //const minref=useRef
  
  //const minute=(e)=>{

  //}
const counterRef=useRef(null)
 useEffect(()=>{
  counterRef.current=setInterval(() => {
    setCount((e)=>e+1)
    if(count>=99)
    {
      setSecond(second+1)
      setCount(0);
    }
    setSecond((second+1))
    if(second>=59)
    {
      setMin(Min+1)
      setSecond(0); 
    }
    if(Min>=59)
    {
      setHour(hour+1)
      setMin(0); 
    }
  }, 10);
  clearInterval(counterRef.current)
},[])

  return (
    <div className="App">
    <p>Counter: {hour}h: {Min}m: {second}s: {count}s</p>
    <button onClick={()=>{
      clearInterval(counterRef.current)
    }}>Pause</button>

    <button onClick={()=>{
      counterRef.current=setInterval(() => {
    setCount((e)=>e+1)
  }, 10);
    }}>start</button>

    <button onClick={()=>{
      //clearInterval(counterRef.current)
   setCount(0) 
   setSecond(0) 
   setMin(0)
    }}>Reset</button>
    </div>
  )
}

export default App
