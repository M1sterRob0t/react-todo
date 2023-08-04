import React, { Component } from 'react';

import Header from '../header';
import Footer from '../footer';
import TasksList from '../tasks-list';
import './app.css';
import { TTask } from '../../types/task';
import { Filter } from '../../constants';

interface IAppProps {
  tasks: TTask[];
}

interface IAppState {
  tasks: TTask[];
  filter: Filter;
}

class App extends Component<IAppProps, IAppState> {
  constructor(props: IAppState) {
    super(props);
    this.state = {
      tasks: this.props.tasks,
      filter: Filter.All,
    };

    this.deleteTask = this.deleteTask.bind(this);
    this.addTask = this.addTask.bind(this);
    this.toggleTaskStatus = this.toggleTaskStatus.bind(this);
    this.changeFilter = this.changeFilter.bind(this);
    this.remveCompletedTasks = this.remveCompletedTasks.bind(this);
    this.changeTaskText = this.changeTaskText.bind(this);
  }
  minID = 100;

  toggleTaskStatus(id: number) {
    const taskIndex = this.state.tasks.findIndex((el) => el.id === id);
    const task = this.state.tasks[taskIndex];
    if (!task) throw new Error();

    this.setState(({ tasks }) => {
      const newTask = { ...task, isCompleted: !task.isCompleted };
      return {
        tasks: [...tasks.slice(0, taskIndex), newTask, ...tasks.slice(taskIndex + 1)],
      };
    });
  }

  deleteTask(id: number) {
    this.setState(({ tasks }) => {
      return {
        tasks: tasks.filter((el) => el.id !== id), // [...tasks.slice(0, index), ...tasks.slice(index + 1)]
      };
    });
  }

  addTask(text: string) {
    this.setState(({ tasks }) => {
      return {
        tasks: [{ id: this.minID++, isCompleted: false, created: new Date(), text }, ...tasks],
      };
    });
  }

  changeTaskText(id: number, newText: string) {
    const taskIndex = this.state.tasks.findIndex((el) => el.id === id);
    const task = this.state.tasks[taskIndex];
    if (!task) throw new Error();

    this.setState(({ tasks }) => {
      const newTask = { ...task, text: newText };
      return {
        tasks: [...tasks.slice(0, taskIndex), newTask, ...tasks.slice(taskIndex + 1)],
      };
    });
  }

  changeFilter(filterName: Filter) {
    this.setState(() => ({ filter: filterName }));
  }

  remveCompletedTasks() {
    this.setState(({ tasks }) => {
      return {
        tasks: tasks.filter((el) => !el.isCompleted),
      };
    });
  }

  getFilteredTasks() {
    switch (this.state.filter) {
      case Filter.All:
        return this.state.tasks;
      case Filter.Active:
        return this.state.tasks.filter((task) => !task.isCompleted);
      case Filter.Completed:
        return this.state.tasks.filter((task) => task.isCompleted);
      default:
        return this.state.tasks;
    }
  }

  render() {
    const filteredTasks = this.getFilteredTasks();
    return (
      <React.StrictMode>
        <Header onTaskAdd={this.addTask} />
        <section className="main">
          <TasksList
            tasks={filteredTasks}
            onTaskDelete={this.deleteTask}
            onTaskStatusToggle={this.toggleTaskStatus}
            onTaskStatusChange={this.changeTaskText}
          />
          <Footer
            tasks={this.state.tasks}
            onFilterChange={this.changeFilter}
            filter={this.state.filter}
            onClearCompleted={this.remveCompletedTasks}
          />
        </section>
      </React.StrictMode>
    );
  }
}

export default App;
