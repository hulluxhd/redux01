import { todoTypes } from "../todo.types";

export function addTodo(title) {
    return {
        type: todoTypes.ADD_TODO,
        payload: {
            title
        }
    }
}

export function removeTodo(id) {
    return {
        type: todoTypes.REMOVE_TODO,
        payload: {
            id
        }
    }
}

export function markTodoAsCompleted(todo) {
    return {
        type: todoTypes.MARK_AS_COMPLETED,
        payload: {
            todo
        }
    }
}