import { useEffect, useRef } from "react";

function Preview({ code }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      iframeRef.current.srcdoc = code;
    }, 300); // debounce to avoid lag

    return () => clearTimeout(timeout);
  }, [code]);

  return <iframe ref={iframeRef} className="w-full h-full border" title="Preview Output" />;
}
export default Preview;
