import { Component } from 'react';
import './new-task-form.css';

interface INewTaskFormProps {
  onTaskAdd: (text: string) => void;
}

interface INewTaskFormState {
  value: string;
}

class NewTaskForm extends Component<INewTaskFormProps, INewTaskFormState> {
  constructor(props: INewTaskFormProps) {
    super(props);
    this.state = {
      value: 'What needs to be done?',
    };
  }

  changeValue(newValue: string) {
    this.setState({ value: newValue });
  }

  render() {
    return (
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onKeyDown={(evt) => {
          if (evt.key === 'Enter') {
            this.props.onTaskAdd(this.state.value);
            this.changeValue('');
          }
        }}
        value={this.state.value}
        onChange={(evt) => this.changeValue(evt.target.value)}
      />
    );
  }
}

export default NewTaskForm;
