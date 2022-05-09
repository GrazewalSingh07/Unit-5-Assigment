import {createContext} from "react"

export const ThemeContext=createContext()
import {useState} from "react"



export const ThemeContextProvider=({children})=>{
    const [istheme,usetheme]=useState(false)
    const handlechange=(state)=>{
        usetheme(state)
    }

    return <ThemeContext.Provider value={{istheme,handlechange}}>
{children}
    </ThemeContext.Provider>
}