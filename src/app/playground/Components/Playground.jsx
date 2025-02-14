'use client'

import { useState, useRef } from "react";
import CodeEditor, { defaultComponent } from "./CodeEditor";

export default function Playground() {

  const [code, setCode] = useState(defaultComponent);
  const [iframeKey, setIframeKey] = useState(0);
  const [editorWidth, setEditorWidth] = useState(50);
  const [previewWidth, setPreviewWidth] = useState(50);
  const isResizing = useRef(false);

  // Mouse Move Handler (Resize logic)
  const handleMouseMove = (e) => {
    if (!isResizing.current) return;

    const newWidth = (e.clientX / window.innerWidth) * 100; // Calculate the width as a percentage of the window width

    setEditorWidth(newWidth);
    setPreviewWidth(100 - newWidth); // Adjust preview width accordingly

  };

  // Mouse Down Handler (Start Resize)
  const handleMouseDown = () => {
    isResizing.current = true;
  };

  // Mouse Up Handler (End Resize)
  const handleMouseUp = () => {
    isResizing.current = false;
  };

  return (
    <div className="">
      <div className="px-3">
        <div className="flex justify-between items-center py-1">
          <h1 className="text-2xl font-bold ">TwDevs Playground</h1>
        </div>
      </div>
      <div
        className="flex w-full h-screen overflow-hidden"
        onMouseMove={handleMouseMove} // Move Event
        onMouseUp={handleMouseUp}    // Mouse Up Event
      >
        {/* Code Editor */}
        <div
          className="overflow-auto bg-gray-800"
          style={{ width: `${editorWidth}%` }} // Set width in percentage
        >
          <CodeEditor code={code} setCode={setCode} />
        </div>

        {/* Divider */}
        <div
          id="playGroundDivider"
          className="w-2 bg-gray-300 cursor-col-resize h-full flex items-center justify-center text-black font-bold select-none"
          onMouseDown={handleMouseDown} // Mouse Down to start resize
        >
        </div>

        {/* Output Preview */}
        <div
          onMouseMove={handleMouseMove} // Move Event
          onMouseUp={handleMouseUp}    // Mouse Up Event
          style={{ width: `${previewWidth}%` }} // Set width in percentage
          className="h-full p-11 border overflow-auto flex-1"
        >
          <iframe
            key={iframeKey}
            srcDoc={`
              <html>
                <head>
                  <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
                  <style>
                    ::-webkit-scrollbar {
                      width: 10px;
                      height: 10px;
                    }
                    ::-webkit-scrollbar-track {
                      background-color: #f1f1f1;
                    }
                    ::-webkit-scrollbar-thumb {
                      background-color: #ccc;
                      border-radius: 5px;
                    }
                    ::-webkit-scrollbar-thumb:hover {
                      background-color: #aaa;
                    }
                  </style>
                </head>
                <body class='px-4'>
                  ${code}
                </body>
              </html>
            `}
            width="100%"
            height="100%"
            style={{ border: 'none' }}
          />
        </div>
      </div>
    </div>
  );
}
