import ReactDOM from 'react-dom/client';

import App from './components/app';
import { TTask } from './types/task';

const importantTasks: TTask[] = [
  { id: 0, text: 'Drink vodka', isCompleted: false, created: new Date(2023, 7, 4, 10, 20) },
  { id: 1, text: 'Smoke weed', isCompleted: false, created: new Date(2023, 7, 3, 18, 1) },
  { id: 2, text: 'Hijack a car', isCompleted: true, created: new Date(2023, 7, 1, 4, 30) },
];
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App tasks={importantTasks} />);
