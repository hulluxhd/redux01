import { configureStore } from "@reduxjs/toolkit";
import {todoReducer} from "./todos/slices/todo.slice"

export const store = configureStore({
    reducer: {
        todos: todoReducer
    }
})