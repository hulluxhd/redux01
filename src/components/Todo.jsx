import { useDispatch, useSelector } from "react-redux"
import { removeTodo } from "../redux/todos/actions/removeTodo.action"
import { markTodoAsCompleted } from "../redux/todos/actions/markTodoAsCompleted.action.js"
import { todoList } from "../redux/todos/selectors/todoList.selector"

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
    const todoInfo = useSelector(todoList)
    console.log(todoInfo)
    return (
        <ul style={style}>
            {todoInfo?.map(todo => (
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