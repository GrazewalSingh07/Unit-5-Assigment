//import { useState } from 'react'
//import logo from './logo.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import {Routes,Route} from "react-router-dom"
import {Product} from "./components/product"
import { ProductDetails } from './components/productDetails'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/product" element={<Product/>}></Route>
      <Route path="/product/:id" element={<ProductDetails/>}></Route>
    </Routes>
    </div>
  )
}

export default App
