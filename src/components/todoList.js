import React from 'react'
import TodoItem from './todoItem'

function TodoList({todos, setTodos, openForm, setOpenForm}) {
  return (
    <div className='todo-container'>
      <div className='todo-list'>
          {todos.map(todo => (
            <TodoItem 
            id={todo.id}
            title={todo.title} 
            deadline={todo.deadline} 
            status={todo.status} 
            todos={todos} 
            setTodos={setTodos} 
            openForm={openForm}
            setOpenForm={setOpenForm}/>
          ))}
      </div>

        {todos && todos.length > 0 && <div className='list-container'>
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
        </div>}
    </div>
  )
}

export default TodoList