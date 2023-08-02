import React from "react";
import Header from "../header";
import Footer from "../footer";
import TasksList from "../tasks-list";
import './app.css';

interface IAppProps {
  data: string[];
}

const App = ({data}: IAppProps):JSX.Element => {
  return (
    <React.StrictMode>
      <Header />
      <section className="main">
        <TasksList data={data}/>
        <Footer />
      </section>
    </React.StrictMode>
  );
};

export default App;