import { Component } from "react";
import "./task-filter.css";
import { MouseEvent } from "react";
import { Filter } from "../../constants";


interface ITaskFilterProps {
  filter: Filter;
  onFilterChange: (filterName: Filter) => void;
}

class TasksFilter extends Component<ITaskFilterProps> {
  constructor(props: ITaskFilterProps) {
    super(props);
    this.filterChangeHandler = this.filterChangeHandler.bind(this);
  }

  filterChangeHandler(evt: MouseEvent<HTMLButtonElement>) {
    const filterName = evt.currentTarget.dataset.filter as Filter;
    if (filterName === this.props.filter) return;
    this.setState(() => ({ filter: filterName }));
    this.props.onFilterChange(filterName);
  }

  render() {
    return (
      <ul className="filters">
        <li>
          <button
            className={this.props.filter === Filter.All ? "selected" : ""}
            data-filter={Filter.All}
            onClick={this.filterChangeHandler}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={this.props.filter === Filter.Active ? "selected" : ""}
            data-filter={Filter.Active}
            onClick={this.filterChangeHandler}
          >
            Active
          </button>
        </li>
        <li>
          <button
            className={this.props.filter === Filter.Completed ? "selected" : ""}
            data-filter={Filter.Completed}
            onClick={this.filterChangeHandler}
          >
            Completed
          </button>
        </li>
      </ul>
    );
  }
}

export default TasksFilter;
