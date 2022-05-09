import { useState } from 'react'
//import logo from './logo.svg'
import './App.css'
import { Routes, Route } from "react-router-dom"
import{ Todo} from "./components/Todo"
import { Todo1 } from './Components/Todo1'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
      <Route  path="/" element={ <Todo/>} />
      <Route  path='/todo/:id' element={<Todo1/>}></Route>
      </Routes>
     
      
    </div>
  )
}

export default App