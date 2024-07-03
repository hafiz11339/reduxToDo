import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "../features/todoSlice"
export const store = configureStore({
    reducer: todoReducers
}); // it take object as argument to createStore


// import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from '../features/todoSlice'


// export const store = configureStore({

//     reducer:{
//         todo:todoReducer
//     }

// });