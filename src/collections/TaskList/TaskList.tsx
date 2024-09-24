import { useTodo } from '../../context';
import { TaskItem } from './TaskItem';

type taskType = 'overdue' | 'outstanding' | 'complete';

// TODO: types seperate folder
type Todo = {
  id: string;
  name: string;
  description: string;
  dueDate: Date | null;
  isCompleted: boolean;
};
interface TaskItemProps {
  taskType: taskType;
  todos: Todo[];
}


export const TaskList: React.FC<TaskItemProps> = ({ taskType, todos }) => {
  // const {todos} = useTodo();
  return (
    <div className='flex flex-col gap-4 mt-4'>
      {todos.map((task) => (
        <TaskItem
         // TODO: types seperate folder
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
