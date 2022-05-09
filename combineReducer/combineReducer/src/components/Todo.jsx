import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Button, Radio } from 'antd';
import { Input } from 'antd';
import { addTodo, toggleTodo } from "../redux/todo/action";
export const Todo = () => {
  const dispatch = useDispatch();
  const todo = useSelector((store) => store.todos.todos);
  const [text, setText] = useState("");
  const addData = () => {
    const data = {
      title: text,
      status: "Not Done",
    };
    axios.post("http://localhost:8080/todos", data).then(() => getData());
  };

  const getData = () => {
    axios
      .get("http://localhost:8080/todos")
      .then((res) => dispatch(addTodo(res.data)));
  };

  useEffect(() => {
    getData();
  }, []);



  const toggleFn = (e) => {
    dispatch(toggleTodo(e))
    // console.log(e)

  }
  return (
    <div>
      <h3>Todo</h3>
      <Input style={{width: "300px", margin:"20px"}}
        onChange={(e) => {
          setText(e.target.value);
        }}
        type="text"
        placeholder="Add Todo"
      />
      <Button type="primary"  onClick={addData}>Add</Button >

      {todo.map((e) => {
        return (
          <h3 key={e.id}>
           
            {e.id}. {e.title} - {e.status?"Not Done": "Done"} <Button type="primary" onClick={()=>{toggleFn(e.id)}}>Toggle</Button >
          </h3>
        );
      })}
    </div>
  );
};