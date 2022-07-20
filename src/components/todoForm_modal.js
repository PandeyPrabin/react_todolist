import React, { useState } from 'react'
import './todoForm_modal.css'

function TodoForm_modal({openForm, setOpenForm}) {

  const [inputData, setInputData] = useState('')
  const [items, setItems] = useState([]) 
  const addItem = () =>{
    if(!inputData){

    }else{
      setItems([...items, inputData])
      setInputData('')
    }
  }
  
  const deleteItem = (id) =>{
    const updateditems = items.filter((elem, ind)=>{
      return ind ===! id
    })
    setItems(updateditems)
  }

  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='title'>
          <h1>Add new todo</h1>
        </div>
        <div className='body'>
        <label><input type="text" placeholder='Title'
        value={inputData}
        onChange={(e)=>setInputData(e.target.value)}/></label>
        <label><input type="text" placeholder='Deadline'/></label>
          <label>
              <select id='status' placeholder='Status'>
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
          {
            items.map((elem, ind)=>{
              return(
                <div className='eachItem' key={ind}>
                  <h3>{ elem }</h3>
                  <i className='fa fa-trash' title='Delete Item'
                  onClick={()=>deleteItem(ind)}/>
                </div>
              )
            })
          }
      </div>
    </div>
  )
}

export default TodoForm_modal