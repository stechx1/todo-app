import { useState } from 'react';
import { Button, DatePicker, Input, TextArea } from '../../components';
import { FaPlus } from 'react-icons/fa6';
import { DatePickerProps } from 'antd';
import { useTodo } from '../../context';
import { Dayjs } from 'dayjs'; 

export const TodoForm = () => {
  const [taskName, setTaskName] = useState('');
  const [date, setDate] = useState<Dayjs | null>(null); 
  const [description, setDescription] = useState('');
  const { addTodo } = useTodo();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(taskName, description, date);
    setTaskName('');
    setDate(null);
    setDescription('');
  };

  const onDateChange: DatePickerProps['onChange'] = (date, dateString) => {
    setDate(date)
  };
  return (
    <form onSubmit={onSubmit} className='flex flex-col gap-2'>
      <div className='flex gap-2'>
        <Input
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder='Task Name*'
          required
        />
        <DatePicker
          value={date}
          onChange={onDateChange}
          placeholder='mm/dd/yyyy'
          format='MMM DD, YYYY'
        />
        <Button icon={<FaPlus />}>Add</Button>
      </div>

      <div>
        <TextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Description (optional)'
          cols={38}
        />
      </div>
    </form>
  );
};
