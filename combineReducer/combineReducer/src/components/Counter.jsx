import { useDispatch, useSelector } from "react-redux";
import { addCounter } from "../redux/counter/action";
import { Button, Radio } from 'antd';


export const Counter = () => {
    const dispatch = useDispatch()
    const data = useSelector((store) => store.counter.counter);
    const addCount = () => {
        dispatch(addCounter(1))
        
    }
    return <div>
        <h3>Counter: { data}</h3>
        <Button onClick={addCount}>Add</Button>
        <hr />
    </div>
}