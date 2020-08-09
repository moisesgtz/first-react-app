import React, {useState} from 'react';
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState(['Todo 1', 'Todo 2'])
  return (
    <>
    <TodoList todos = {todos} />
    <input type = "text" />
    <button onClick= {printFunction}>Add Todo</button>
    <button>Clear Complete</button>
    <div>0 left to do</div>
    </>

  )
}

function printFunction(){
  console.log('Hello World!')
}

export default App;
