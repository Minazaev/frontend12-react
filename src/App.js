import { useDispatch, useSelector } from 'react-redux';
import './App.css';



function App() {

  const todos = useSelector(state => state);

  const dispatch = useDispatch()

  function deleteTodo(id){
    dispatch({
      type: 'DELETE',
      payload: id
    })
  }

  return(
    
      todos.map((item, index) => {
        return(
          
          <div className='todos'>
            <div>
              <input type='checkbox' checked={item.done}/>
            </div>
            <div className='text'>
              {item.text}
            </div>
            <div>
              <button onClick={() => deleteTodo(index)} className='btn-delete'>x</button>
            </div>
          </div>
        )
      })
  )
}

export default App;
