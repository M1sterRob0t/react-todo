import React, { useState } from 'react';

import Header from '../header';
import Footer from '../footer';
import TasksList from '../tasks-list';
import { TTask } from '../../types/task';
import { Filter } from '../../constants';

interface IAppProps {
  initialTasks: TTask[];
}

function App({ initialTasks }: IAppProps): JSX.Element {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState(Filter.All);
  let minID = 100;

  function toggleTaskStatus(id: number): void {
    setTasks((prevTasks) => {
      const taskIndex = prevTasks.findIndex((el) => el.id === id);
      const prevTask = prevTasks[taskIndex];
      const newTask = { ...prevTask, isCompleted: !prevTask.isCompleted };

      return [...prevTasks.slice(0, taskIndex), newTask, ...prevTasks.slice(taskIndex + 1)];
    });
  }

  function deleteTask(id: number) {
    setTasks((prevTasks) => prevTasks.filter((el) => el.id !== id));
  }

  function addTask(text: string, min: number, sec: number): void {
    if (isNaN(min) || isNaN(sec)) {
      min = 0;
      sec = 0;
    }

    const newTask: TTask = {
      id: minID++,
      isCompleted: false,
      created: new Date(),
      text,
      min,
      sec,
    };

    setTasks((prevTasks) => [newTask, ...prevTasks]);
  }

  function changeTaskText(id: number, newText: string): void {
    setTasks((prevTasks) => {
      const taskIndex = prevTasks.findIndex((el) => el.id === id);
      const prevTask = prevTasks[taskIndex];
      const newTask = { ...prevTask, text: newText };

      return [...prevTasks.slice(0, taskIndex), newTask, ...prevTasks.slice(taskIndex + 1)];
    });
  }

  function changeFilter(filterName: Filter): void {
    setFilter(filterName);
  }

  function remveCompletedTasks(): void {
    setTasks((prevTasks) => prevTasks.filter((el) => !el.isCompleted));
  }

  function getFilteredTasks(): TTask[] {
    switch (filter) {
      case Filter.All:
        return tasks;
      case Filter.Active:
        return tasks.filter((task) => !task.isCompleted);
      case Filter.Completed:
        return tasks.filter((task) => task.isCompleted);
      default:
        return tasks;
    }
  }

  const filteredTasks = getFilteredTasks();

  return (
    <React.StrictMode>
      <Header onTaskAdd={addTask} />
      <section className="main">
        <TasksList
          tasks={filteredTasks}
          onTaskDelete={deleteTask}
          onTaskStatusToggle={toggleTaskStatus}
          onTaskStatusChange={changeTaskText}
        />
        <Footer tasks={tasks} onFilterChange={changeFilter} filter={filter} onClearCompleted={remveCompletedTasks} />
      </section>
    </React.StrictMode>
  );
}

export default App;
