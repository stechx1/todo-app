import { useState } from 'react';
import { TaskList, TodoForm } from './collections';
import { TodoProvider } from './context';
import { Todo } from './types';
import dayjs, { Dayjs } from 'dayjs';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (
    name: string,
    description: string,
    dueDate: Dayjs | null
  ) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).substr(2, 9),
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

  const getOutstandingTodos = (todos: Todo[]) => {
    return todos.filter(
      (todo) =>
        !todo.isCompleted && todo.dueDate && todo.dueDate.isAfter(dayjs())
    );
  };

  const getOverdueTodos = (todos: Todo[]) => {
    return todos.filter(
      (todo) =>
        !todo.isCompleted && todo.dueDate && todo.dueDate.isBefore(dayjs())
    );
  };

  const getCompleteTodos = (todos: Todo[]) => {
    return todos.filter((todo) => todo.isCompleted);
  };

  const overdueTodos = getOverdueTodos(todos);
  const outstandingTodos = getOutstandingTodos(todos);
  const completedTodos = getCompleteTodos(todos);

  return (
    <TodoProvider value={{ todos, addTodo, toggleCompletion }}>
      <div className='flex flex-col justify-center items-center my-16'>
        <div className='max-w-[600px] flex flex-col gap-8'>
          <div>
            <h1 className='text-3xl font-semibold mb-2'>
              To Do{' '}
              <span className='text-[#667085] font-normal '>
                {todos.length}
              </span>
            </h1>
            <TodoForm />
          </div>

          <div>
            <h2 className='text-2xl font-medium'>
              Overdue{' '}
              <span className='text-[#667085] font-normal'>
                {overdueTodos.length}
              </span>
            </h2>
            <TaskList todos={overdueTodos} taskType='overdue' />
          </div>

          <div>
            <h2 className='text-2xl font-medium'>
              Outstanding{' '}
              <span className='text-[#667085] font-normal'>
                {outstandingTodos.length}
              </span>
            </h2>
            <TaskList todos={outstandingTodos} taskType='outstanding' />
          </div>

          <div>
            <h2 className='text-2xl font-medium'>
              Complete{' '}
              <span className='text-[#667085] font-normal'>
                {completedTodos.length}
              </span>
            </h2>
            <TaskList todos={completedTodos} taskType='complete' />
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
