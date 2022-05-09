//import axios from "axios"
import {useState,useEffect} from "react"
import { useParams } from "react-router-dom";
import "./product.css"
export const ProductDetails=()=>{
const [show,showdetails]=useState([])
const {id}=useParams();
console.log(id)
const output=async()=>{
    try {
        console.log(id)
        let res=await fetch(`http://localhost:8080/product/${id}`)
        res=await res.json()
        showdetails(res)
        console.log(res)
    } catch (err) {
        console.log(err)
    }
}

useEffect(()=>{
    output()
    //axios.get("http://localhost:8080/product").then(({data})=>{
    //    showdetails(data.product)
    //})
},[])
    return(
//        <div>{show.map((e)=>(
//<p>Title:{e.price}</p>
//        ))}

        //</div>
        //<div>data</div>
        <div className="details">
            <img className="img1" src={show.image}></img>
            <h4>Title:{show.title}</h4>
            <h4>Price:{show.price}</h4>
        </div>
    )
}