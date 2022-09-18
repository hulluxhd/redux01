import { useRef } from "react"
import { useDispatch } from "react-redux"
import { Todo } from "./components/Todo"
import { addTodo } from "./redux/todos/actions/addTodo.action"


const styles = {
  width: "100%",
  position: "absolute",
  bottom: "5%"
}

function App() {

  const inputRef = useRef(null)

  const dispatch = useDispatch()

  function handleTitle({value: title}) {
    console.log(title)
    dispatch(addTodo(title))
    inputRef.current.value = ""
  }

  return (
    <div className="App">
      <h1>React Redux</h1>

      <Todo />
      <div style={styles}>
        <input ref={inputRef}  placeholder="Nova tarefa" />
        <button onClick={() => handleTitle(inputRef.current)}>Enviar</button>
      </div>
    </div>
  )
}

export default App
