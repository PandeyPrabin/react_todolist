import React from 'react'
import './todoitem.css';


function TodoItem({text, deadline, status, todos, setTodos, openForm, setOpenForm}) {

  const editTodo = () => {
     let newTodo = todos.find((todo)=>{
            return todo.id === todo.id
      })
      setOpenForm(true)
  }

  return (
    <div className='todoitem'>
        <li className='todo-item' onClick={editTodo}>{text}{status}</li>
        <li>Deadline:{deadline}</li>
        {/* <button className='trash-button'><i className='fas fa-trash'></i></button> */}
    </div>
  )
}

export default TodoItem