import ReactDOM from 'react-dom/client';

import App from './components/app';
import { TTask } from './types/task';

const importantTasks: TTask[] = [
  { id: 0, text: 'Smoke weed', isCompleted: false, created: new Date(2023, 7, 3, 18, 1), min: 0, sec: 0 },
  { id: 1, text: 'Drink vodka', isCompleted: false, created: new Date(2023, 7, 4, 10, 20), min: 0, sec: 0 },
  { id: 2, text: 'Robe a shop', isCompleted: true, created: new Date(2023, 7, 1, 9, 0), min: 0, sec: 0 },
  { id: 3, text: 'Hijack a car', isCompleted: true, created: new Date(2023, 6, 29, 19, 45), min: 0, sec: 0 },
];
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App tasks={importantTasks} />);
