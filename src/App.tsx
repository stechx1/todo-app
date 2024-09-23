import { Button, Input } from './components';
import { FaPlus } from 'react-icons/fa6';

function App() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <p>Inter font</p>
      <Button icon={<FaPlus />}>Add</Button>
      <Input placeholder={'Task Name'} />
    </div>
  );
}

export default App;
