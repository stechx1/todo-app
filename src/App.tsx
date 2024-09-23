import { TaskList, TodoForm } from './collections';

function App() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='max-w-[600px] flex flex-col gap-8'>
        <div>
          <h1 className='text-3xl font-semibold'>
            To Do <span className='text-[#667085] font-normal'>{8}</span>
          </h1>
          <TodoForm />
        </div>

        <div>
          <h2 className='text-2xl font-medium'>
            Overdue <span className='text-[#667085] font-normal'>{3}</span>
          </h2>
          <TaskList taskType='overdue' />
        </div>
      </div>
    </div>
  );
}

export default App;
