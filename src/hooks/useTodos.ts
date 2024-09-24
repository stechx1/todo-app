import { useState, useCallback } from 'react';
import { Todo } from '../types';
import { v4 as uuidv4 } from 'uuid';
import dayjs, { Dayjs } from 'dayjs';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (name: string, description: string, dueDate: Dayjs | null) => {
    setTodos((prev) => [
      ...prev,
      {
        id: uuidv4(),
        name,
        dueDate,
        description,
        isCompleted: false,
      },
    ]);
  };

  const toggleCompletion = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const getOutstandingTodos = useCallback(() => {
    return todos.filter(
      (todo) => !todo.isCompleted && todo.dueDate && todo.dueDate.isAfter(dayjs())
    );
  }, [todos]);

  const getOverdueTodos = useCallback(() => {
    return todos.filter(
      (todo) => !todo.isCompleted && todo.dueDate && todo.dueDate.isBefore(dayjs())
    );
  }, [todos]);

  const getCompleteTodos = useCallback(() => {
    return todos.filter((todo) => todo.isCompleted);
  }, [todos]);

  return {
    todos,
    addTodo,
    toggleCompletion,
    getOutstandingTodos,
    getOverdueTodos,
    getCompleteTodos,
  };
};
