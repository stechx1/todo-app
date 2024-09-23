import { useState, useEffect } from 'react';
import { TaskList, TodoForm } from './collections';
import { TodoProvider } from './context';

function App() {
  // TODO: types seperate folder
  type Todo = {
    id: string;
    name: string;
    description: string;
    dueDate: Date | null;
    isCompleted: boolean;
  };

  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (name: string, description: string, dueDate: Date | null) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).substr(2, 0),
        name,
        dueDate,
        description,
        isCompleted: false,
      },
    ]);
  };

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      const todos = JSON.parse(storedTodos);
      if (Array.isArray(todos)) {
        setTodos(todos);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const toggleCompletion = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <TodoProvider value={{ todos, addTodo, toggleCompletion }}>
      <div className='flex flex-col justify-center items-center my-16'>
        <div className='max-w-[600px] flex flex-col gap-8'>
          <div>
            <h1 className='text-3xl font-semibold mb-2'>
              To Do <span className='text-[#667085] font-normal '>{8}</span>
            </h1>
            <TodoForm />
          </div>

          <div>
            <h2 className='text-2xl font-medium'>
              Overdue <span className='text-[#667085] font-normal'>{3}</span>
            </h2>
            <TaskList taskType='overdue' />
          </div>

          <div>
            <h2 className='text-2xl font-medium'>
              Outstanding{' '}
              <span className='text-[#667085] font-normal'>{3}</span>
            </h2>
            <TaskList taskType='outstanding' />
          </div>

          <div>
            <h2 className='text-2xl font-medium'>
              Complete <span className='text-[#667085] font-normal'>{2}</span>
            </h2>
            <TaskList taskType='outstanding' />
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
