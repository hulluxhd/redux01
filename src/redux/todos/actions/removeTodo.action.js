import { todoTypes } from "../todo.types";

export function removeTodo(id) {
    return {
        type: todoTypes.REMOVE_TODO,
        payload: {
            id
        }
    }
}