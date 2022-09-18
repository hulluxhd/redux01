import { useDispatch, useSelector } from "react-redux"
import { markTodoAsCompleted, removeTodo } from "../redux/todos/actions/addTodo.action"

const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}

const liStyle = {
    border: "1px solid black",
    padding: "10px",
    marginBottom: "10px"
}

const liStyleCompleted = {
    backgroundColor: "yellow",
    border: "1px solid black",
    padding: "10px",
    marginBottom: "10px"
}

export function Todo() {
    const dispatch = useDispatch()
    const todoInfo = useSelector((state) => state)
    console.log(todoInfo)

    return (
        <ul style={style}>
            {todoInfo.todos.todoList?.map(todo => (
                <li key={todo.id} style={todo.completed ? liStyleCompleted : liStyle}>
                    <p>{todo.id}</p>
                    <p>{todo.title}</p>
                    <p>Completed: {todo.completed.toString()}</p>
                    <button onClick={() => dispatch(removeTodo(todo.id))}>Remover</button>
                    <button onClick={() => dispatch(markTodoAsCompleted(todo))}>Completado</button>
                </li>
            ))}

        </ul>
    )
}