'use client'

import { ReactNode, createContext, useContext, useState } from "react";

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

//This is type script man
export type TodosContext = {
  todos: Todo[];
  handleAddTodo: (task: string) => void;
  toggleTodoAsCompleted: (id: string) => void;
  handleTodoDelete: (id:string) => void;
};

export const todoContext = createContext<TodosContext | null >(null);  //union operator

export const TodosProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const newTodos = localStorage.getItem('todos') || "[]";
    return JSON.parse(newTodos) as Todo[]
  } );

  //that input field
  const handleAddTodo = (task: string) => {
    setTodos((prev) => {
      const newTodos: Todo[] = [
        {
          id: Math.random().toString(),
          task,
          completed: false,
          createdAt: new Date(),
        },
        ...prev,
      ];

      //storing in localstorage
      localStorage.setItem("todos" , JSON.stringify(newTodos))
      return newTodos;
    });
  };

//if the task is completed 
const toggleTodoAsCompleted = (id:string) => {

  setTodos((prev) => {
    const newTodos = prev.map((task) => {
      if(task.id === id){
        return{...task , completed : !task.completed}
      }

      return task;
    })
    localStorage.setItem("todos" , JSON.stringify(newTodos))
    return newTodos;
  })
}

//delete todo that is completed 
const handleTodoDelete = (id:string) => {
  setTodos((prev) => {
    const newTodos = prev.filter((task) => task.id !== id)
    localStorage.setItem("todos" , JSON.stringify(newTodos))
    return newTodos;
  })
}



  //now to need to return
  return (
    <todoContext.Provider
      value={{todos, handleAddTodo, toggleTodoAsCompleted , handleTodoDelete }}
    >
        {children}
    </todoContext.Provider>
  );
};


//creating of cutom hooks useTodo;

export function useTodos(){
    const todosContextValue = useContext(todoContext)
    if(!todosContextValue){
        throw new Error('useTodo is used outside of the provider')
    }
    return todosContextValue;
}