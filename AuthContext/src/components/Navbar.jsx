import { Authcontext } from "../context/AuthContext";
import { useContext,useEffect,useState } from "react";

export const Navbar=()=>{
    const {isAuth,handletoggle}=useContext(Authcontext)
const [user,setuser]=useState("")
    useEffect(()=>{
        {isAuth?handle():""}
    },[isAuth])
const handle=async()=>{
    try {
        let res=await fetch("https://reqres.in/api/login",{
            method:"POST",headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify()
        })
        res=await res.json();
        setuser(res.token)
        console.log(res.token)
    } catch (err) {
        console.log(err)
    }
}

    return <div>
    <input type={"email"} placeholder="enter your valid email"></input>
    <input type={"password"} placeholder="enter password"></input>
        <button onClick={()=>{
            alert("user log in sucessfull")
            handletoggle(true);
        }} style={{margin:"10px",background:"teal"}}>Login</button>
        <button style={{margin:"10px",background:"teal"}}>LogOut</button>
        <h2>Token:{isAuth?"QpwL5tke4Pnpja7X4":""}</h2>
        <h2>
            Status:{isAuth?"User Login":" User logout"}
        </h2>
    </div>
}