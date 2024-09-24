import { Dayjs } from 'dayjs';
import { Checkbox } from '../../components';
import { useTodo } from '../../context';

type taskType = 'overdue' | 'outstanding' | 'complete';

interface TaskItemProps {
  id: string;
  taskType: taskType;
  dueDate: Dayjs | null;
  description?: string;
  completed: boolean;
  name: string;
}

export const TaskItem: React.FC<TaskItemProps> = ({
  id,
  taskType,
  dueDate,
  description,
  completed,
  name,
}) => {
  const formattedDate = dueDate && dueDate.format("MMM DD, YYYY")
  const { toggleCompletion } = useTodo();
  return (
    <div className='flex justify-between'>
      <div className='flex flex-col justify-center'>
        <Checkbox checked={completed} onChange={(e) => toggleCompletion(id)}>
          {name}
        </Checkbox>
        <p className='ml-6 text-[#475467]'>{description}</p>
      </div>
      <p
        className={`${
          taskType === 'overdue' ? 'text-red-500' : 'text-[#667085]'
        } text-sm`}
      >
        {formattedDate}
      </p>
    </div>
  );
};
