import React from 'react'
import TodoItem from './todoItem'

function TodoList({todos, setTodos}) {
  console.log(todos)
  return (
    <div className='todo-container'>
      <div className='todo-list'>
          {todos.map(todo => (
            <TodoItem text={todo.text} deadline={todo.deadline} status={todo.status}/>
          ))}
      </div>
    </div>
  )
}

export default TodoList