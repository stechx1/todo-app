import { Button, DatePicker, Input, TextArea } from '../../components';
import { FaPlus } from 'react-icons/fa6';
export const TodoForm = () => {
  return (
    <form className='flex flex-col gap-2'>
      <div className='flex gap-2'>
        <Input placeholder='Task Name*' required />
        <DatePicker placeholder='mm/dd/yyyy' format="MM/DD/YYYY" />
        <Button icon={<FaPlus />}>Add</Button>
      </div>

      <div>
        <TextArea placeholder='Description (optional)' cols={38} />
      </div>
    </form>
  );
};
