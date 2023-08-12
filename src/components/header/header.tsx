import NewTaskForm from '../new-task-form';

interface IHeaderProps {
  onTaskAdd: (text: string, min: number, sec: number) => void;
}

const Header = ({ onTaskAdd }: IHeaderProps): JSX.Element => {
  return (
    <header className="header">
      <h1 className="header__title">todos</h1>
      <NewTaskForm onTaskAdd={onTaskAdd} />
    </header>
  );
};

export default Header;
