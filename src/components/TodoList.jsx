import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addTodo,deleteTodo } from '../features/todoSlice'
const TodoList = () => {
    // console.log( useSelector(state))
    const todoData = useSelector(state=> state.todosData) // todosData wo list hai jis mai data para howa ha
    // console.log( todoData)
    const dispatch = useDispatch();
  return (
    <>
    <div>
        {todoData.map((todo)=>{
            console.log(todo)
            return(
            <li key={todo.id}>
                
                <h1>{todo.text}</h1>
                <button onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</button> 
            </li>
            )
        })}
    </div>
    </>
  )
}
export default TodoList
