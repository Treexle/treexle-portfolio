import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex items-center justify-center mb-4 ">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="font-mono font-bold">
        <span className="text-yellow-200">Vite</span> +{" "}
        <span className="text-blue-600">React</span> +{" "}
        <span className="text-teal-400">TailwindCSS</span>
      </h1>
      <div className="card">
        <button
          className="bg-slate-900 rounded-lg"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
