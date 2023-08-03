import Task from "../task";
import './task-list.css';
import { TTask } from "../../types/task";

interface ITasksListProps {
  tasks: TTask[];
  onTaskDelete: (id: number) => void;
  onTaskStatusToggle: (id:number) => void;
}

const TasksList = ({tasks, onTaskDelete, onTaskStatusToggle}: ITasksListProps):JSX.Element => {
  return (
    <ul className="todo-list">
      {tasks.map((task) => <Task task={task} key={task.id} onDelete={onTaskDelete} onToggle={onTaskStatusToggle}/>)}
    </ul>
  );
}

export default TasksList;