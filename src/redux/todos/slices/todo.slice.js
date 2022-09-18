import { createSlice } from "@reduxjs/toolkit";
import { todoTypes } from "../todo.types";

const INITIAL_STATE = {
    todoList: [
        {
            id: 1,
            title: "teste",
            completed: false
        }
    ]

}


export function todoReducer(state = INITIAL_STATE, action) {
    if (action.type === todoTypes.ADD_TODO) {
        return {
            ...state,
            todoList: [
                ...state.todoList,
                {
                    id: Date.now(),
                    title: action.payload.title,
                    completed: false
                }
            ]
        }
    }

    if (action.type === todoTypes.REMOVE_TODO) {
        const { id } = action.payload

        const newTodoList = state.todoList.filter(todo => id !== todo.id)
        if (newTodoList.length === 0) {
            return { todoList: [] }
        }

        else {
            return { todoList: newTodoList }
        }
    }

    if (action.type === todoTypes.MARK_AS_COMPLETED) {
        const { todo } = action.payload
        const filteredTodo = state.todoList.find(todoo => todoo.id === todo.id)
        filteredTodo.completed = !filteredTodo.completed
        return {...state}

    }

    return state
} 