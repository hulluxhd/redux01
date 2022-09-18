import { todoTypes } from "../todo.types";

export function addTodo(title) {
    return {
        type: todoTypes.ADD_TODO,
        payload: {
            title
        }
    }
}



