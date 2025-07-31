import JSZip from "jszip";
import { saveAs } from "file-saver";

function DownloadButton({ code }) {
  const handleDownload = () => {
    const zip = new JSZip();
    zip.file("index.html", code.html);
    zip.file("style.css", code.css);
    zip.file("script.js", code.js);

    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "codecanvas-project.zip");
    });
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
    >
      Download ZIP
    </button>
  );
}

export default DownloadButton;
