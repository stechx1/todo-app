import React, { useContext } from "react";
import { Todo } from "../types";
import { Dayjs } from "dayjs";

interface TodoContextType {
  todos: Todo[];
  addTodo: (name: string, description: string, dueDate: Dayjs | null) => void;
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