import { Button } from './components';
import { FaPlus } from 'react-icons/fa6';

function App() {
  return (
    <div className='flex flex-col items-center'>
      <p>Inter font</p>
      <Button icon={<FaPlus />}>Add</Button>
    </div>
  );
}

export default App;
