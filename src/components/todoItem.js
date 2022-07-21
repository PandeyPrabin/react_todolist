import React from 'react'
import './todoitem.css';


function TodoItem({title, deadline, status, todos, setTodos, openForm, setOpenForm}) {  
  const newEditTodo = () => {
     let newTodo = todos.find((todo)=>{
            return todo.id === todo.id
      })
       setOpenForm(true)
  }

  return (
    <div>
    <div className='todoitem-container'>
      <div className='status' style={{ background: status}}>
      </div>
       <div className='todo-item' onClick={newEditTodo}>
        <ul  >{title}</ul>
        <ul>Status:{status}</ul>
        <ul>Deadline:{deadline}</ul>
        </div>
        </div>
        <div className='list-container'>

        <div className='statuslist'>
          <div className='list-done'></div>
          <div className='list-name'>Done</div>
          </div>
          <div className='statuslist'>
          <div className='list-not-started'></div>
          <div className='list-name'>Not started</div>
          </div>
          <div className='statuslist'>
          <div className='list-in-progress'></div>
          <div className='list-name'>In progress</div>
          </div>

      </div>
    </div>
  )
}

export default TodoItem