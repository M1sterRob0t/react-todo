import ReactDOM from "react-dom/client";
import App from "./components/app";

const importantTasks: string[] = [
  "Drink vodka",
  "Smoke weed",
  "Hijack car",
];
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App data={importantTasks} />);
