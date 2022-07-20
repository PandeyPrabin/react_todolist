import React, { useState } from 'react'
import './todoForm_modal.css'

function TodoForm_modal({openForm, setOpenForm, todos, setTodos}) {

  const [title, setTitle] = useState('')
  const [deadline, setDeadline] = useState('')
  const [status, setStatus] = useState('Not Started')
  //const [items, setItems] = useState([]) 

  const addItem = (e) =>{
  console.log({title, deadline, status})
    if(!title){

    }else{
      setTodos([...todos, title, deadline, status])
      setTitle('')
      setDeadline('')
      setStatus('')
      setOpenForm(false)
    }
  }
  
  const deleteItem = (id) =>{
    const updateditems = todos.filter((elem, ind)=>{
      return ind ===! id
    })
    setTodos(updateditems)
  }

  return (
    <div>
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
              <select id='status' placeholder='Status' 
        value={status}
        onChange={(e)=>setStatus(e.target.value)}
        className='select'>
                <option value='notstarted'>Not Started</option>
                <option value='inprogress'>In Progress</option>
                <option value='done'>Done</option>
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