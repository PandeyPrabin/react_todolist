import React, { useState } from 'react'
import './todoitem.css';


function TodoItem({title, deadline, status, setOpenForm}) { 

  const newEditTodo = () => {
    //  let newTodo = todos.filter((todo) => {
    //    //     return  todo.id===todoId
    //   })
       setOpenForm(true)
  }
  

  return (
    <div>
    <div className='todoitem-container'>
      <div className='status' style={{ background: status || 'red'}}>
      </div>
       <div className='todo-item' onClick={newEditTodo}>
        <ul  className='title-text'>{title}</ul>
        <ul className='deadline-text'>Deadline:{deadline}</ul>
        </div>
        </div>
    </div>
  )
}

export default TodoItem