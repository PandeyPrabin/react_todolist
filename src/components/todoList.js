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
    </div>
  )
}

export default TodoList