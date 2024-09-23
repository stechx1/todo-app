import React, { useContext } from "react";

interface Todo {
  id: string; 
  name: string;
  dueDate: Date | null; 
  description: string;
  isCompleted: boolean;
}

interface TodoContextType {
  todos: Todo[];
  addTodo: (name: string, description: string, dueDate: Date | null) => void;
  toggleCompletion: (id: string) => void;
}

export const TodoContext = React.createContext<TodoContextType>({
  todos: [
    {
      id: '',
      name: '',
      dueDate: null,
      description: '',
      isCompleted: false,
    }
  ],
  addTodo: () => {}, 
  toggleCompletion: () => {}  
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
}