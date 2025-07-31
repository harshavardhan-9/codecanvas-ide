function Sidebar({ children }) {
  return (
    <div className="w-60 bg-gray-100 dark:bg-gray-800 border-r border-gray-300 dark:border-gray-700 overflow-y-auto">
      {children}
    </div>
  );
}
export default Sidebar;