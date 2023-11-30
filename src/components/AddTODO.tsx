'use client'

import { useTodos } from '@/store/todos';
import React, { FormEvent, useState } from 'react'
import { Button, buttonVariants } from "@/components/ui/button";


const AddTODO = () => {

    const[todo , setTodo] = useState('');

    const {handleAddTodo} = useTodos();


    const handleFormSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleAddTodo(todo);
        setTodo('')
        
    }


  

  return (
    <>
      <form className="max-w-md mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter your todo"
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
          className="border rounded w-full py-2 px-3 mb-3"
        />
        <Button type="submit" className="bg-violet-500 text-white py-2 px-4 rounded">
          Add Todo &rarr;
        </Button>
      </form>


    </>
  )
}

export default AddTODO


