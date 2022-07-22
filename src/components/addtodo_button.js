import React from 'react'
import './addtodo_button.css'



function Addtodo_button({openForm, setOpenForm}) {

  return (
  <>
        <div className='todo'>
              <button className='openModalBtn' onClick={()=>setOpenForm(true)}>Add a new todo</button>
         </div>
   </>
   )
}

export default Addtodo_button