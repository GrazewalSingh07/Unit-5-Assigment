
import axios from "axios"
import { useState } from "react"
import { useDispatch , useSelector} from "react-redux"
import { Login } from "../redux/isAuth/action"
export const Auth = () => {

    const [text, setText] = useState({})
    const token = useSelector((store) => store.token)
    const dispatch = useDispatch()
    
    const postData = () => {
        axios.post("https://reqres.in/api/login", text).then((res)=>{dispatch(Login(res.data.token))})
    }

    return <div>
        <input name="email" onChange={(e) => { setText({ ...text, [e.target.name]: e.target.value }) }} type="text" placeholder="email" />
        


        <input name= "password" onChange={(e)=>{setText({...text, [e.target.name]: e.target.value})}} type="text" placeholder="pass" />
        <button onClick={postData} >Login</button>
        <hr />
    </div>
}