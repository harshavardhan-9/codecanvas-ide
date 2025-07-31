import MonacoEditor from "@monaco-editor/react";
import { useEffect } from "react";

function CodeEditor({ code, setCode, language }) {
  function handleEditorChange(value) {
    setCode(value);
  }

  function handleEditorWillMount(monaco) {
    monaco.editor.defineTheme("codecanvas-dark", {
      base: "vs-dark",
      inherit: true,
      rules: [
        { token: "", background: "1e1e1e", foreground: "ffffff" },
        { token: "comment", foreground: "6A9955" },
        { token: "keyword", foreground: "569CD6" },
        { token: "number", foreground: "B5CEA8" },
        { token: "string", foreground: "CE9178" },
      ],
      colors: {
        "editor.background": "#1e1e1e",
        "editor.foreground": "#ffffff",
        "editorLineNumber.foreground": "#858585",
        "editorCursor.foreground": "#ffffff",
        "editor.lineHighlightBackground": "#2a2d2e",
      },
    });

    monaco.editor.defineTheme("codecanvas-light", {
      base: "vs",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": "#ffffff",
        "editor.foreground": "#000000",
      },
    });
  }

  return (
    <MonacoEditor
      height="100%"
      defaultLanguage={language}
      value={code}
      theme={localStorage.getItem("codecanvas-theme") === "dark" ? "codecanvas-dark" : "codecanvas-light"}
      onChange={handleEditorChange}
      beforeMount={handleEditorWillMount}
      options={{
        automaticLayout: true,
        fontSize: 14,
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        wordWrap: "on",
      }}
    />
  );
}

export default CodeEditor;
