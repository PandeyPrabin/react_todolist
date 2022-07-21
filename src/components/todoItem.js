import React from 'react'
import './todoitem.css';


function TodoItem({title, deadline, status, todos, setTodos, openForm, setOpenForm}) {  
console.log(status)

  const newEditTodo = () => {
     let newTodo = todos.find((todo)=>{
            return todo.id === todo.id
      })
       setOpenForm(true)
  }

  return (
    <div className='todoitem-container'>
      <div className='status' style={{ background: status}}>
      </div>
       <div className='todo-item' onClick={newEditTodo}>
        <ul  >{title}</ul>
        <ul>Status:{status}</ul>
        <ul>Deadline:{deadline}</ul>
        </div>
    </div>
  )
}

export default TodoItem