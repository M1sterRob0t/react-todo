import NewTaskForm from "../new-task-form";
import './header.css';

interface IHeaderProps {
  onTaskAdd: (text: string) => void;
}

const Header = ({onTaskAdd}: IHeaderProps): JSX.Element => {
  return (
    <header className="header">
      <h1 className="header__title">todos</h1>
      <NewTaskForm onTaskAdd={onTaskAdd}/>
    </header>
  );
};

export default Header;