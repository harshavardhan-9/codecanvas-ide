import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar";
import FileExplorer from "./components/FileExplorer";
import CodeEditor from "./components/CodeEditor";
import Preview from "./components/Preview";
import "./App.css";

/*function App() {
  const [count, setount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
*/

function App() {
  const [code, setCode] = useState(`<html><body><h1>Hello World</h1></body></html>`);

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <div className="w-1/2 p-2 bg-gray-100">
          <CodeEditor code={code} setCode={setCode} />
        </div>
        <div className="w-1/2 p-2 bg-white">
          <Preview code={code} />
        </div>
      </div>
    </div>
  );
}

export default App;

