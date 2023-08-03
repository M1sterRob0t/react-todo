import {Component} from'react';
import './task.css';
import { TTask } from '../../types/task';

const ClassName = {
  COMPLETED: `completed`,
  EDITING: `editing`,
}

interface IStateProps {
  isCompleted: boolean,
  isEditing: boolean,
}

interface ITaskProps {
  task: TTask;
  onDelete: (id: number) => void;
}

class Task extends Component<ITaskProps, IStateProps> {
  constructor(props: ITaskProps) {
    super(props);
    this.state = {
      isEditing: false,
      isCompleted: false,
    };
    this.taskClickHandler = this.taskClickHandler.bind(this);
    this.editButtonClickHandler = this.editButtonClickHandler.bind(this);
  }

  taskClickHandler() {
    this.setState((state) => ({isCompleted: !state.isCompleted}));
  }

  editButtonClickHandler() {
    this.setState((state) => ({isEditing: !state.isEditing}));
  }

  render() {
    const {text, id} = this.props.task;
    const isCompleted = this.state.isCompleted ? ClassName.COMPLETED : "";
    const isEditing = this.state.isEditing ? ClassName.EDITING : "";
    return (
      <li className={`${isCompleted} ${isEditing}`}>
        <div className="view">
          <input className="toggle" type="checkbox"/>
          <label onClick={this.taskClickHandler}>
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
