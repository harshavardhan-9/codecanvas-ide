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
  const [activeTab, setActiveTab] = useState("html");
  const [code, setCode] = useState({
    html: "<h1>Hello World</h1>",
    css: "h1 { color: blue; }",
    js: "console.log('Hello from JS')"
  });

  const handleCodeChange = (value) => {
    setCode({ ...code, [activeTab]: value });
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar code={code} />
      <div className="flex flex-1">
        <FileExplorer />
        <div className="flex flex-col flex-1">
          {/* Tab Buttons */}
          <div className="flex space-x-4 bg-gray-900 text-white px-4 py-2">
            {["html", "css", "js"].map((lang) => (
              <button
                key={lang}
                onClick={() => setActiveTab(lang)}
                className={`capitalize ${
                  activeTab === lang ? "border-b-2 border-blue-500 font-semibold" : "opacity-60"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Code Editor */}
          <div className="flex-1 overflow-hidden">
            <CodeEditor
              code={code[activeTab]}
              setCode={handleCodeChange}
              language={activeTab}
            />
          </div>
        </div>

        {/* Live Preview */}
        <Preview code={code} />
      </div>
    </div>
  );
}

export default App;