function CodeEditor({ code, setCode }) {
  return (
    <textarea
      className="w-full h-full p-2 border resize-none font-mono text-sm"
      value={code}
      onChange={(e) => setCode(e.target.value)}
    />
  );
}
export default CodeEditor;
