import ReactDOM from "react-dom/client";
import App from "./components/app";
import {TTask} from "./types/task";

const importantTasks: TTask[] = [
  {id: 0, text: "Drink vodka"},
  {id: 1, text: "Smoke weed"},
  {id: 2, text: "Hijack a car"},
];
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App tasks={importantTasks} />);
