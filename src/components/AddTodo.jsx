import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addTodo} from '../features/todoSlice'
// we add using dispatch method.....
const AddTodo = () => {
     
    const [input,setInput] = useState("");
    const dispatch = useDispatch();
    const addTodoHandler = (e) =>{
        if (input === ""){
            alert("Please enter the value");
            e.preventDefault();
            return;
        }
        e.preventDefault();
        dispatch(addTodo(input));
        setInput("");
    }
    return (
    <div>
        <form onSubmit={addTodoHandler}>
            <input type="text" value={input} onChange={(e)=> setInput(e.target.value)}/>
            <br/><br/>
            <button type='submit'>Add Todo</button>
        </form>
    </div>
    )
}

export default AddTodo
