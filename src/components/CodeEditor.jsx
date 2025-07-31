export default function CodeEditor() {
  return (
    <textarea
      className="w-full h-full bg-black text-green-400 font-mono p-4 resize-none outline-none"
      defaultValue={"// Write your code here"}
    />
  );
}
