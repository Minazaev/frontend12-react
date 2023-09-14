import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [todos, setTodos] = useState([
    {
      text: 'Html',
    },
    {
      text: 'Html',
    },
    {
      text: 'Html',
    }
  ])

  const [text, setText] = useState('')
  const [check, checkChange] = useState()


  function handlerChange(e){
    setText(e.target.value)
  }

  function handlerBtn(){
    setTodos([
      ...todos,
      {
        text: text
      }
    ])
    setText('')
  }

  function handlerCheck(){
    if(checkChange == true){
    }
  }

  return(
    <div className='container p-4'>
      <div>
        <input type={'checkbox'} checked={check} onChange={handlerCheck}/>
        <input placeholder='text' value={text} onChange={handlerChange}/>
        <button onClick={handlerBtn}>add</button>
      </div>
      {
        todos.map(item =>{
          return(
            <div>
              {item.text}
            </div>
          )
        })
      }
    </div>
    
  )

  
}

export default App;
