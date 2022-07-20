import React from 'react'
import TodoItem from './todoItem'

function TodoList({todos, setTodos}) {
  return (
    <div className='todo-container'>
      <div className='todo-list'>
          {todos.map(todo => (
            <TodoItem />
          ))}
      </div>
    </div>
  )
}

export default TodoList