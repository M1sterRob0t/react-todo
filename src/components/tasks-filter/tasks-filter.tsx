import { MouseEvent, useState } from 'react';

import { Filter } from '../../constants';

interface ITaskFilterProps {
  filter: Filter;
  onFilterChange: (filterName: Filter) => void;
}

function TasksFilter({ filter, onFilterChange }: ITaskFilterProps) {
  const [currentFilter, setFilter] = useState(filter);

  function filterChangeHandler(evt: MouseEvent<HTMLButtonElement>) {
    const filterName = evt.currentTarget.dataset.filter as Filter;
    if (filterName === currentFilter) return;
    setFilter(filterName);
    onFilterChange(filterName);
  }

  return (
    <ul className="filters">
      <li>
        <button
          className={currentFilter === Filter.All ? 'selected' : ''}
          data-filter={Filter.All}
          onClick={filterChangeHandler}
        >
          All
        </button>
      </li>
      <li>
        <button
          className={currentFilter === Filter.Active ? 'selected' : ''}
          data-filter={Filter.Active}
          onClick={filterChangeHandler}
        >
          Active
        </button>
      </li>
      <li>
        <button
          className={currentFilter === Filter.Completed ? 'selected' : ''}
          data-filter={Filter.Completed}
          onClick={filterChangeHandler}
        >
          Completed
        </button>
      </li>
    </ul>
  );
}

export default TasksFilter;
