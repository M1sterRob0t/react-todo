import Task from "../task";
import './task-list.css';

interface ITasksListProps {
  data: string[];
}

const TasksList = ({data}: ITasksListProps):JSX.Element => {
  return (
    <ul className="todo-list">
      {data.map((data) => <Task text={data}/>)}
    </ul>
  );
}

export default TasksList;