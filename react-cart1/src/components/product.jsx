//import { Link } from "react-router-dom"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import "./product.css"

export const Product=()=>{
    const [show,setShow]=useState([])
   
    const output=async()=>{
        try {
            let res=await fetch("http://localhost:8080/product")
            res=await res.json()
            setShow(res)
            console.log(res.image)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(()=>{
        output()
            },[])
    //output()
    return(
        <div className="image">{show.map((e)=>(
<Link to={`/product/${e.id}`}>
<img className="img" src={e.image}/>
</Link>

        ))}

        </div>
    )
}