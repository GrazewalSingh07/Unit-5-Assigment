//import { Children } from "react"
import { createContext } from "react";
export const Authcontext=createContext()
import {useState} from "react"

export const AuthcontextsProvidor=({children})=>{
    const [isAuth,setisAuth]=useState(false)
    const handletoggle=(state)=>{
        setisAuth(state)
    }

    return (<Authcontext.Provider value={{isAuth,handletoggle}}>
        {children}
    </Authcontext.Provider>)
}