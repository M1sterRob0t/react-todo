import ReactDOM from "react-dom/client";
import App from "./components/app";
import {TTask} from "./types/task";

const importantTasks: TTask[] = [
  {id: 0, text: "Drink vodka", isCompleted: false},
  {id: 1, text: "Smoke weed", isCompleted: false},
  {id: 2, text: "Hijack a car", isCompleted: true},
];
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App tasks={importantTasks} />);
