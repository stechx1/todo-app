import { TaskList, TodoForm } from './collections';
import { TodoProvider } from './context';
import { useTodos } from './hooks/useTodos';

function App() {
  const {
    todos,
    addTodo,
    toggleCompletion,
    getOutstandingTodos,
    getOverdueTodos,
    getCompleteTodos,
  } = useTodos();

  const overdueTodos = getOverdueTodos();
  const outstandingTodos = getOutstandingTodos();
  const completedTodos = getCompleteTodos();

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
