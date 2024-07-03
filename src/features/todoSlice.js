import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todosData: [{id:1, name:"Hacker"}],
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {    // we always update the state every time using the reducer.........
        addTodo: (state, action) => {
            const todo = {
                id :nanoid(),
                text: action.payload
            }
            state.todosData.push(todo)
        },
        deleteTodo: (state, action) => {
            state.todosData = state.todosData.filter((todo) => todo.id != action.payload)
        }
    }
})


export const {addTodo,deleteTodo} = todoSlice.actions
export default todoSlice.reducer
