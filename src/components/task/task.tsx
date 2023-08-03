import {Component} from'react';
import './task.css';
import { TTask } from '../../types/task';

const ClassName = {
  COMPLETED: `completed`,
  EDITING: `editing`,
}

interface IStateProps {
  isEditing: boolean,
}

interface ITaskProps {
  task: TTask;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

class Task extends Component<ITaskProps, IStateProps> {
  constructor(props: ITaskProps) {
    super(props);
    this.state = {
      isEditing: false,
    };

    this.taskStatusChangeHandler = this.taskStatusChangeHandler.bind(this);
    this.editButtonClickHandler = this.editButtonClickHandler.bind(this);
  }

  taskStatusChangeHandler() {
    this.props.onToggle(this.props.task.id);
  }

  editButtonClickHandler() {
    this.setState((state) => ({isEditing: !state.isEditing}));
  }

  render() {
    const {text, id, isCompleted} = this.props.task;
    const completedClassName = isCompleted ? ClassName.COMPLETED : "";
    const editingClassName = this.state.isEditing ? ClassName.EDITING : "";
    return (
      <li className={`${completedClassName} ${editingClassName}`}>
        <div className="view">
          <input className="toggle" id={`toggle-${id}`} type="checkbox" defaultChecked={isCompleted} onChange={this.taskStatusChangeHandler}/>
          <label htmlFor={`toggle-${id}`}>
            <span className="description">{text}</span>
            <span className="created">created 17 seconds ago</span>
          </label>
          <button className="icon icon-edit" onClick={this.editButtonClickHandler}></button>
          <button className="icon icon-destroy" onClick={() => this.props.onDelete(id)}></button>
        </div>
        <input type="text" className="edit"/>
      </li>
    );
  }
};

export default Task;
