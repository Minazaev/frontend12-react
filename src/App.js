import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoForm from './components/ToDoForm';
import ToDo from './components/ToDo';

function App() {

  const [todos, setTodos] = useState([])

  const addTask = (text) => {
    if(text){
      const newItem = {
        id: Math.random().toString(32).substr(2, 9),
        task: text,
        complete: false
      }
      setTodos([...todos, newItem])      
    }
  }

  const removedTask = (id) => {
    setTodos([...todos.filter(todo => todo.id != id)])
  }

  const changeTask = (id) => {
    setTodos([
      ...todos.map(todo => todo.id === id ? {
        ...todo,
        complete: !todo.complete
      }: {...todo})
    ])
  }

  return(
    <div className='App'>
      <header>
        <h1 className='header-text'>Количество задач № {todos.length}</h1>
      </header>
      {todos.map((todo, index) => {
        return(
          <ToDo
          todo={todo}
          key={todo.id}
          toggleTask={changeTask}
          removedTask={removedTask}/>
        )
      })}
      <ToDoForm addTask={addTask}/>
    </div>
    
  )
}

export default App;
