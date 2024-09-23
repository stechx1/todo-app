import { useTodo } from '../../context';
import { TaskItem } from './TaskItem';

type taskType = 'overdue' | 'outstanding' | 'complete';

interface TaskItemProps {
  taskType: taskType;
}


export const TaskList: React.FC<TaskItemProps> = ({ taskType }) => {
  const {todos} = useTodo();
  return (
    <div className='flex flex-col gap-4 mt-4'>
      {todos.map((task) => (
        <TaskItem
          key={task.id}
          taskType={taskType}
          dueDate={task.dueDate}
          completed={task.isCompleted}
          description={task.description}
          name={task.name}
        />
      ))}
    </div>
  );
};
