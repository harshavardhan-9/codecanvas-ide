import { useEffect, useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import FileExplorer from "./components/FileExplorer";
import CodeEditor from "./components/CodeEditor";
import Preview from "./components/Preview";
import DownloadButton from "./components/DownloadButton";

function App() {
  const [activeTab, setActiveTab] = useState("html");

  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("codecanvas-theme") === "dark";
  });

  const [code, setCode] = useState(() => {
    const saved = localStorage.getItem("codecanvas-code");
    return saved
      ? JSON.parse(saved)
      : {
          html: "<h1>Hello World</h1>",
          css: "h1 { color: blue; }",
          js: "console.log('Hello from JS')",
        };
  });

  const handleCodeChange = (value) => {
    const updatedCode = { ...code, [activeTab]: value };
    setCode(updatedCode);
    localStorage.setItem("codecanvas-code", JSON.stringify(updatedCode));
  };

  useEffect(() => {
    localStorage.setItem("codecanvas-code", JSON.stringify(code));
  }, [code]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("codecanvas-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("codecanvas-theme", "light");
    }
  }, [isDark]);

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navbar code={code} isDark={isDark} setIsDark={setIsDark} />
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
                  activeTab === lang
                    ? "border-b-2 border-blue-500 font-semibold"
                    : "opacity-60"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Monaco Code Editor */}
          <div className="flex-1 overflow-hidden">
            <CodeEditor
              key={isDark ? "dark" : "light"} // ✅ force re-mount
              code={code[activeTab]}
              setCode={(val) => handleCodeChange(val)}
              language={activeTab}
            />

          </div>
        </div>

        {/* Right-side: Download + Preview */}
        <div className="w-1/2 flex flex-col">
          <div className="p-4">
            <DownloadButton code={code} />
          </div>
          <Preview code={code} />
        </div>
      </div>
    </div>
  );
}

export default App;
