import { useState } from 'react';

interface INewTaskFormProps {
  onTaskAdd: (text: string, min: number, sec: number) => void;
}

function NewTaskForm({ onTaskAdd }: INewTaskFormProps) {
  const [task, setTask] = useState('');
  const [min, setMinutes] = useState<string>('');
  const [sec, setSeconds] = useState<string>('');

  return (
    <form
      className="new-todo-form"
      onSubmit={(evt) => {
        evt.preventDefault();
        onTaskAdd(task, Number(min), Number(sec));
        setTask('');
        setMinutes('');
        setSeconds('');
      }}
    >
      <input
        className="new-todo"
        placeholder="Task"
        autoFocus
        value={task}
        onChange={(evt) => setTask(evt.target.value)}
        required
      />
      <input
        className="new-todo-form__timer"
        placeholder="Min"
        value={min}
        onChange={(evt) => setMinutes(evt.target.value)}
      />
      <input
        className="new-todo-form__timer"
        placeholder="Sec"
        value={sec}
        onChange={(evt) => setSeconds(evt.target.value)}
      />
      <button type="submit"></button>
    </form>
  );
}

export default NewTaskForm;
