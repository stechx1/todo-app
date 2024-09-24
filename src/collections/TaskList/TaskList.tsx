import { taskType, Todo } from '../../types';
import { TaskItem } from './TaskItem';

interface TaskItemProps {
  taskType: taskType;
  todos: Todo[];
}

export const TaskList: React.FC<TaskItemProps> = ({ taskType, todos }) => {
  return (
    <div className='flex flex-col gap-4 mt-4'>
      {todos.map((task) => (
        <TaskItem
          id={task.id}
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
