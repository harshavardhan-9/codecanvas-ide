
import React from "react";
function Navbar({ isDark, setIsDark }) {
  return (
    <div className="flex justify-between items-center px-6 py-3 bg-white dark:bg-gray-800 shadow border-b dark:border-gray-700">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        <span className="text-blue-500">Code</span>Canvas
      </h1>
      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsDark(!isDark)}
          className="px-3 py-1 border border-gray-400 dark:border-white text-sm rounded text-gray-800 dark:text-white"
        >
          {isDark ? "☀ Light" : "🌙 Dark"}
        </button>
      </div>
    </div>
  );
}
export default Navbar;