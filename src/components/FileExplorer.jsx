function FileExplorer() {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        Files
      </h2>
      <ul className="space-y-2">
        <li className="text-gray-700 dark:text-gray-300">index.html</li>
        <li className="text-gray-700 dark:text-gray-300">styles.css</li>
        <li className="text-gray-700 dark:text-gray-300">app.js</li>
      </ul>
    </div>
  );
}
export default FileExplorer;