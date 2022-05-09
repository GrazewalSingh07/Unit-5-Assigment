//import logo from './logo.svg';
import './App.css';

import {useState} from "react"

function App() {
 const [count,setCount] = useState(0);
//if(count<0 || count>10)
//{
//return 
//}
// const Addme=()=>{
//  if(count>=10)
//  {
//    return;
//  }
// // if(count%2==0){
// //   color:red
// // }
//   setCount(count+1)
// }


// const Subtractme=()=>{
//  if(count<=0)
//  {
//    return;
//  }
//  setCount(count-1)
// }

//const DoubleMe=()=>{
//  if(count>=30)
//  {
//    return;
//  }
//  setCount(count*2)
const handleChange=(value)=>{
  setCount(count+value)
}

const handleDouble=(value)=>{
setCount(value)
}
  return (
    <div className="App">
     <h2 className={count%2===0?"green":"red"}>Counter {count}</h2>
     <button onClick={()=>handleChange(1)}>Add 1</button>
     <button onClick={()=>handleChange(-1)}>sub 1</button>
     <button onClick={()=>handleDouble(count*2)}>Double</button>
    </div>
  );
}

export default App;
