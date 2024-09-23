import { Button, Input, DatePicker, TextArea } from './components';
import { FaPlus } from 'react-icons/fa6';

function App() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <p>Inter font</p>
      <Button icon={<FaPlus />}>Add</Button>
      <Input placeholder={'Task Name*'} />

      <DatePicker placeholder='mm/dd/yyyy' format="MM/DD/YYYY" />

      <TextArea placeholder={"Description (optional)"} rows={4} />
    </div>
  );
}

export default App;
