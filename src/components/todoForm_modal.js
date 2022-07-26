import React, { useState } from 'react'
import './todoForm_modal.css'

function TodoForm_modal({openForm, setOpenForm, todos, setTodos}) {

  const [title, setTitle] = useState('')
  const [deadline, setDeadline] = useState('')
  const [status, setStatus] = useState('')

  const addItem = (e) =>{
    if(!title){
      return;
    }else{
      setTodos([...todos, {title:title, deadline:deadline, status:status, id: Math.random()*1000}])
      setTitle('')
      setDeadline('')
      setStatus('')
      setOpenForm(false)
    }
  }
  
  return (
    <div className="modalWrapper">
        {openForm &&(
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='title'>
          <p>Add new todo</p>
        </div>
        <div className='body'>

        <label><input type="text" placeholder='Title'
        value={title}
        onChange={(e)=>setTitle(e.target.value)}/></label>

        <label><input type="text" placeholder='Deadline'
        value={deadline}
        onChange={(e)=>setDeadline(e.target.value)}/></label>
          <label>
        <select id='status'  
            value={status}
            onChange={(e)=>setStatus(e.target.value)}
            className='select'>
                <option defaultValue=''>Status</option>
                <option value='red'>Not Started</option>
                <option value='yellow'>In Progress</option>
                <option value='green'>Done</option>
        </select>
          </label>
        </div>

        <div className='footer'>
          <button className='CancelBtn' id='CancelBtn' 
          onClick={()=>setOpenForm(false)}
          onKeyDown={()=>setOpenForm(false)}
            >Cancel</button>
          <button className='add-btn' title='Add Item' onClick={addItem}>Add</button>
        </div>
      </div>
    </div>)}
    </div>
    
  )
}

export default TodoForm_modal