import { TTask } from '../../types/task';
import TasksFilter from '../tasks-filter';
import './footer.css';
import { Filter } from '../../constants';

interface IFooterProps {
  filter: Filter;
  tasks: TTask[];
  onFilterChange: (filterName: Filter) => void;
  onClearCompleted: () => void;
}

const Footer = ({ tasks, filter, onFilterChange, onClearCompleted }: IFooterProps) => {
  const uncompletedTasks = tasks.filter((el) => !el.isCompleted);

  return (
    <footer className="footer">
      <span className="todo-count">{uncompletedTasks.length} items left</span>
      <TasksFilter onFilterChange={onFilterChange} filter={filter} />
      <button className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
