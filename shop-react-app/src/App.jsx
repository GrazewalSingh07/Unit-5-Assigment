// import { CartSlide } from "./components/CartSlide/CartSlide";
import {Route,Routes} from "react-router-dom"
import { Cart } from "./components/Cart/Cart";
import { Products } from "./components/Product/Products";
import { ProductDetail } from "./components/ProductDetail/ProductDetail";
import { Navbar } from "./components/Navbar/Navbar1/Navbar1";
import { Signup } from "./components/Signup/signup";
import {Signin} from "./components/Signin/signin"
import { Home } from "./components/Home/Home";
import { Navbar2 } from "./components/Navbar/Navbar2/Navbar2";
import { PrivateRoute } from "./components/PrivateRoute";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
 import {Address}  from "./components/Address/Address"
import {Footer} from "./components/Footer/Footer"
import { AddressDetails } from "./components/AddressDetail/AddressDetails";
const App = () => {
  
  
 return(
   <div className="App">
     <Navbar/>
     <Navbar2/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/address" element={<Address/>}></Route>
        <Route path="/products/:name" element={<Products/>}></Route>
        <Route path="/product/:name/:id" element={<ProductDetail/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/signin"  element={<Signin/>}></Route>
      <Route path="/addressDetails" element={<AddressDetails/>}></Route>
     </Routes>
     {/* <Footer/> */}
   </div>
 
 ) 
};

export default App;