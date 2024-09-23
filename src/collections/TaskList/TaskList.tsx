import { TaskItem } from './TaskItem';

type taskType = 'overdue' | 'outstanding' | 'complete';

interface TaskItemProps {
  taskType: taskType;
}

const todos = [
  {
    id: 1,
    name: "Mom's Birthday",
    dueDate: new Date('2022-01-06'),
    description: 'Get present and card',
    isCompleted: false,
  },
  {
    id: 2,
    name: 'Buy groceries',
    dueDate: new Date('2022-01-10'),
    description: 'Milk, bread, eggs',
    isCompleted: false,
  },
];

export const TaskList: React.FC<TaskItemProps> = ({ taskType }) => {
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
