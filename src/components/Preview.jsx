function Preview({ code }) {
  const srcDoc = `
    <html>
      <head>
        <style>${code.css}</style>
      </head>
      <body>
        ${code.html}
        <script>${code.js}</script>
      </body>
    </html>
  `;

  return (
    <iframe
      srcDoc={srcDoc}
      title="Live Preview"
      sandbox="allow-scripts"
      frameBorder="0"
      width="100%"
      height="100%"
      className="bg-white"
    />
  );
}

export default Preview;
