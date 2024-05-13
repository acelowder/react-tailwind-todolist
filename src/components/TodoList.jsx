import React from 'react'
import TodoTask from './TodoTask'

export default function TodoList() {
  let todos = [
    'This is your task list',
    'Click on a task to complete it',
    'Drag and drop to change the order'
  ]

  return (
    <ul className='flex flex-col'>
      {todos.map((todo, index) => {
        console.log(todo);
        return (
          <TodoTask key={index} todo={todo} />
        )
      })}
    </ul>
  )
}
