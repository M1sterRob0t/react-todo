import React, { Component } from "react";
import Header from "../header";
import Footer from "../footer";
import TasksList from "../tasks-list";
import "./app.css";
import { TTask } from "../../types/task";

interface IAppProps {
  tasks: TTask[];
}

interface IStateProps {
  tasks: TTask[];
}

class App extends Component<IAppProps, IStateProps> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      tasks: this.props.tasks,
    };
    
    this.deleteTask = this.deleteTask.bind(this);
    this.addTask = this.addTask.bind(this);
  }
  minID = 100;

  deleteTask(id: number) {
    this.setState(({tasks}) => {
      return {
        tasks: tasks.filter((el) => el.id !== id), // [...tasks.slice(0, index), ...tasks.slice(index + 1)]
      }
    });
  }

  addTask(text: string) {
    console.log(text);
    console.log(this.state.tasks);
    this.setState(({tasks}) => {
      return {
        tasks: [...tasks, {id: this.minID++, text}]
      }
    });
  }

  render() {
    return (
      <React.StrictMode>
        <Header onTaskAdd={this.addTask}/>
        <section className="main">
          <TasksList tasks={this.state.tasks} onTaskDelete={this.deleteTask} />
          <Footer />
        </section>
      </React.StrictMode>
    );
  }
}

export default App;
