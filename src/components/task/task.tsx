import { KeyboardEvent, ChangeEvent, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';

import Timer from '../timer';
import { TTask } from '../../types/task';

const ClassName = {
  COMPLETED: 'completed',
  EDITING: 'editing',
};

interface ITaskProps {
  task: TTask;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
  onTextChange: (id: number, newText: string) => void;
}

function Task(props: ITaskProps): JSX.Element {
  const { onToggle, onDelete, onTextChange, task } = props;
  const [isEditing, setEditing] = useState(false);
  const [text, setText] = useState(task.text);

  function taskStatusChangeHandler() {
    onToggle(task.id);
  }

  function editButtonClickHandler() {
    document.addEventListener('keydown', escPressHandler);
    setEditing(true);
  }

  function escPressHandler(evt: globalThis.KeyboardEvent) {
    if (evt.key === 'Escape') {
      setEditing(false);
      document.removeEventListener('keydown', escPressHandler);
    }
  }

  function inputEnterPressHandler(evt: KeyboardEvent<HTMLInputElement>) {
    const input = evt.currentTarget as HTMLInputElement;
    if (evt.key === 'Enter') {
      onTextChange(task.id, input.value);
      setEditing(false);
    }
  }

  function taskTextChangeHandler(evt: ChangeEvent<HTMLInputElement>) {
    const input = evt.currentTarget as HTMLInputElement;
    setText(input.value);
  }

  const { id, isCompleted, created } = task;
  const completedClassName = isCompleted ? ClassName.COMPLETED : '';
  const editingClassName = isEditing ? ClassName.EDITING : '';
  const time = task.min * 60 * 1000 + task.sec * 1000;

  return (
    <li className={`${completedClassName} ${editingClassName}`}>
      <div className="view">
        <input
          className="toggle"
          id={`toggle-${id}`}
          type="checkbox"
          defaultChecked={isCompleted}
          onChange={taskStatusChangeHandler}
        />
        <label htmlFor={`toggle-${id}`}>
          <span className="title">{text}</span>
          <Timer initialTime={time} />
          <span className="description">created {formatDistanceToNow(created)} ago</span>
        </label>
        <button className="icon icon-edit" onClick={editButtonClickHandler}></button>
        <button className="icon icon-destroy" onClick={() => onDelete(id)}></button>
      </div>
      <input
        type="text"
        className="edit"
        onKeyDown={inputEnterPressHandler}
        value={text}
        onChange={taskTextChangeHandler}
      />
    </li>
  );
}

export default Task;
