import NewTaskForm from "../new-task-form";
import './header.css';

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <h1 className="header__title">todos</h1>
      <NewTaskForm />
    </header>
  );
};

export default Header;