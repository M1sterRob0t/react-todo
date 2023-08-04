import Task from '../task';
import './task-list.css';
import { TTask } from '../../types/task';

interface ITasksListProps {
  tasks: TTask[];
  onTaskDelete: (id: number) => void;
  onTaskStatusToggle: (id: number) => void;
  onTaskStatusChange: (id: number, newText: string) => void;
}

const TasksList = ({ tasks, onTaskDelete, onTaskStatusToggle, onTaskStatusChange }: ITasksListProps): JSX.Element => {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task
          task={task}
          key={task.id}
          onDelete={onTaskDelete}
          onToggle={onTaskStatusToggle}
          onTextChange={onTaskStatusChange}
        />
      ))}
    </ul>
  );
};

export default TasksList;
