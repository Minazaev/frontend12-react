
function ToDo({ todo, toggleTask, removedTask }) {
  return(
    <div key={todo.id} className='item-todo'>
        <div className={todo.complete ? 'text-item strike' : 'text-item'}             
        onClick={() => toggleTask(todo.id)}>
            {todo.task}
        </div>
        <div className="item-delete" onClick={() => removedTask(todo.id)}>
            X
        </div>
    </div>
  )
}

export default ToDo;