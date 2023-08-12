import { Component, KeyboardEvent, ChangeEvent } from 'react';
import { formatDistanceToNow } from 'date-fns';

import Timer from '../timer';
import { TTask } from '../../types/task';

const ClassName = {
  COMPLETED: 'completed',
  EDITING: 'editing',
};

interface ITaskState {
  isEditing: boolean;
  text: string;
}

interface ITaskProps {
  task: TTask;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
  onTextChange: (id: number, newText: string) => void;
}

class Task extends Component<ITaskProps, ITaskState> {
  constructor(props: ITaskProps) {
    super(props);
    this.state = {
      isEditing: false,
      text: this.props.task.text,
    };

    this.taskStatusChangeHandler = this.taskStatusChangeHandler.bind(this);
    this.editButtonClickHandler = this.editButtonClickHandler.bind(this);
    this.escPressHandler = this.escPressHandler.bind(this);
    this.inputEnterPressHandler = this.inputEnterPressHandler.bind(this);
    this.taskTextChangeHandler = this.taskTextChangeHandler.bind(this);
  }

  taskStatusChangeHandler() {
    this.props.onToggle(this.props.task.id);
  }

  editButtonClickHandler() {
    document.addEventListener('keydown', this.escPressHandler);
    this.setState(() => ({ isEditing: true }));
  }

  escPressHandler(evt: globalThis.KeyboardEvent) {
    if (evt.key === 'Escape') {
      this.setState(() => ({ isEditing: false }));
      document.removeEventListener('keydown', this.escPressHandler);
    }
  }

  inputEnterPressHandler(evt: KeyboardEvent<HTMLInputElement>) {
    const input = evt.currentTarget as HTMLInputElement;
    if (evt.key === 'Enter') {
      this.props.onTextChange(this.props.task.id, input.value);
      this.setState(() => ({ isEditing: false }));
    }
  }

  taskTextChangeHandler(evt: ChangeEvent<HTMLInputElement>) {
    const input = evt.currentTarget as HTMLInputElement;
    this.setState(() => ({ text: input.value }));
  }

  render() {
    const { text, id, isCompleted, created } = this.props.task;
    const completedClassName = isCompleted ? ClassName.COMPLETED : '';
    const editingClassName = this.state.isEditing ? ClassName.EDITING : '';
    const time = this.props.task.min * 60 * 1000 + this.props.task.sec * 1000;

    return (
      <li className={`${completedClassName} ${editingClassName}`}>
        <div className="view">
          <input
            className="toggle"
            id={`toggle-${id}`}
            type="checkbox"
            defaultChecked={isCompleted}
            onChange={this.taskStatusChangeHandler}
          />
          <label htmlFor={`toggle-${id}`}>
            <span className="title">{text}</span>
            <Timer initialTime={time} />
            <span className="description">created {formatDistanceToNow(created)} ago</span>
          </label>
          <button className="icon icon-edit" onClick={this.editButtonClickHandler}></button>
          <button className="icon icon-destroy" onClick={() => this.props.onDelete(id)}></button>
        </div>
        <input
          type="text"
          className="edit"
          onKeyDown={this.inputEnterPressHandler}
          value={this.state.text}
          onChange={this.taskTextChangeHandler}
        />
      </li>
    );
  }
}

export default Task;
