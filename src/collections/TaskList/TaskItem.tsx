import { Checkbox } from '../../components';

type taskType = 'overdue' | 'outstanding' | 'complete';

interface TaskItemProps {
  taskType: taskType;
  dueDate: Date;
  description?: string;
  completed: boolean;
  name: string;
}

export const TaskItem: React.FC<TaskItemProps> = ({
  taskType,
  dueDate,
  description,
  completed,
  name,
}) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  const formattedDate = dueDate.toLocaleDateString('en-US', options);
  return (
    <div className='flex justify-between'>
      <div className='flex flex-col justify-center'>
        <Checkbox>{name}</Checkbox>
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
