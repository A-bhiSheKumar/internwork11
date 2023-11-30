'use client'

import { useTodos } from '@/store/todos'
import { useSearchParams } from 'next/navigation'
import { Button, buttonVariants } from "@/components/ui/button";

import React from 'react'

const Todos = () => {

    //all the data coming from our store that we created and a custom hook
    const {todos , toggleTodoAsCompleted , handleTodoDelete} = useTodos()
    

    const searchParams = useSearchParams();
    const todosFilter = searchParams.get('todos');



    let filterTodos = todos;

    if(todosFilter === "active"){
      filterTodos = filterTodos.filter((todo) => !todo.completed)
    }else if(todosFilter === "completed"){
      filterTodos = filterTodos.filter((todo) => todo.completed)
    }

  return (
    <ul className="text-center list-none p-0 mt-2">
    {filterTodos.map((todo) => (
      <li key={todo.id} className="flex items-center justify-between bg-white border rounded-lg p-4 shadow-md mb-4">
        <div className="flex items-center space-x-4">
          <input
            type="checkbox"
            id={`todo-${todo.id}`}
            checked={todo.completed}
            onChange={() => toggleTodoAsCompleted(todo.id)}
          />
          <label htmlFor={`todo-${todo.id}`} className={`text-lg ${todo.completed ? 'line-through text-gray-500' : 'text-gray-700'}`}>
            {todo.task}
          </label>
        </div>
        {todo.completed && (
          <Button type="button" onClick={() => handleTodoDelete(todo.id)} className="ml-5" >
            Delete
          </Button>
        )}
      </li>
    ))}
  </ul>
  )
}

export default Todos