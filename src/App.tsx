import { TodoForm } from './collections';

function App() {
  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <div>
        <h1 className='text-2xl font-semibold'>
          To Do <span className='text-[#667085] font-normal'>{8}</span>
        </h1>
        <TodoForm />
      </div>
    </div>
  );
}

export default App;
