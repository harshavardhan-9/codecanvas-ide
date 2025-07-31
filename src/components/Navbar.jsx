import DownloadButton from "./DownloadButton";

function Navbar({ code }) {
  return (
    <nav className="bg-gray-900 text-white px-6 py-3 flex justify-between items-center">
      <div className="text-xl font-bold">CodeCanvas IDE</div>
      <DownloadButton code={code} />
    </nav>
  );
}

export default Navbar;
