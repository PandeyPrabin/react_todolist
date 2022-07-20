import React from 'react'
import {useState} from 'react'
import TodoForm_modal from './todoForm_modal'
import './addtodo_button.css'



function Addtodo_button({openForm, setOpenForm}) {

  return (
  <>
        <div className='todo'>
              <button className='openModalBtn' onClick={()=>setOpenForm(true)}>Add a new todo</button>
              {openForm && <TodoForm_modal openForm={openForm} setOpenForm={setOpenForm} />}

         </div>
   </>
   )
}

export default Addtodo_button