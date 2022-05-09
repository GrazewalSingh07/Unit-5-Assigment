import { useParams } from "react-router-dom"

export const Todo1 = () => {
    const {id}= useParams()
    return <div>
        <h1>{ id}</h1>
    </div>
}