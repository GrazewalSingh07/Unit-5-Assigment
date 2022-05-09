import { ThemeContext } from "../context/themecontext"
import {useContext} from "react"
export const Navbar=()=>{
    const {istheme,handlechange}=useContext(ThemeContext)
    //const {theme,handlechange}=useContext(ThemeContext)
    return <div style={{background:istheme?"black":"red",height:"1000px"}}>
        <button style={{color:istheme?"red":"black"}} onClick={()=>{
            handlechange(true)
            //console.log(istheme)
        }}>Change theme</button>
    </div>
}