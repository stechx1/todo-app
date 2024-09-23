import { Button, Input, DatePicker, TextArea, Checkbox } from './components';
import { FaPlus } from 'react-icons/fa6';

function App() {
  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <p>Inter font</p>
      <Button icon={<FaPlus />}>Add</Button>
      <Input placeholder={'Task Name*'} />

      <DatePicker placeholder='mm/dd/yyyy' format='MM/DD/YYYY' />

      <TextArea placeholder={'Description (optional)'} rows={4} />

      <Checkbox>Hey there</Checkbox>
    </div>
  );
}

export default App;
