import { useState } from 'react'
//import logo from './logo.svg'
import './App.css'
import { Todo } from './components/Todo'
import { Counter } from './components/Counter'
import { Auth } from './components/Auth'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Auth/>
      <Counter/>
   <Todo/>
    </div>
  )
}

export default App