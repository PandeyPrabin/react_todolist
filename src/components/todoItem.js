import React from 'react'
import './todoitem.css';


function TodoItem({text, deadline, status}) {
  return (
    <div className='todoitem'>
        <li className='todo-item'>{text}{status}</li>
        <li>Deadline:{deadline}</li>
        {/* <button className='trash-button'><i className='fas fa-trash'></i></button> */}
    </div>
  )
}

export default TodoItem