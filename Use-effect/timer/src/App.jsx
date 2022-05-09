import { useState,useEffect } from 'react'
//import logo from './logo.svg'
import './App.css'
import {Counter} from "./componants/setcounter"
function App() {
  const [timer,setTimer]=useState(0)
useEffect(()=>{
 const id=setInterval(()=>{
  setTimer((prev)=>{
    if(prev==60
      )
    {
      clearInterval(id)
      return 60
    }
    console.log(prev)
    
    return prev+1
  })
 },1000)
},[])
  return (
    <div className="App">
     {/*<Counter show={timer}/>*/}
     <h2>Count:{timer}</h2>
    </div>
  )
}

export default App
