import { todoTypes } from "../todo.types";

export function markTodoAsCompleted(todo) {
    return {
        type: todoTypes.MARK_AS_COMPLETED,
        payload: {
            todo
        }
    }
}