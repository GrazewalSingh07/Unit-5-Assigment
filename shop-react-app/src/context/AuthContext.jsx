import { createContext, useState} from "react";

export const AuthContext=createContext()

export const AuthContextProvider=({children})=>{
    const [Auth,setAuth]=useState(false)
    
    function handleAuth(val){
        // let tok=
        if(localStorage.getItem("Authtoken")&& val==true){
            setAuth(true)
        }
        else{
            setAuth(false)
        }
    }
   
     
   
    return (<AuthContext.Provider value={{Auth,handleAuth}}>{children}</AuthContext.Provider>)
}
