'use client'

import { useState, useRef } from "react";
import CodeEditor, { defaultComponent } from "./CodeEditor";
import { FaDesktop, FaTabletAlt, FaMobile } from "react-icons/fa";
import { MdOutlineVerticalSplit, MdOutlineHorizontalSplit } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";

export default function Playground() {
  const [code, setCode] = useState(defaultComponent);
  const [iframeKey, setIframeKey] = useState(0);
  const [editorWidth, setEditorWidth] = useState(50);
  const [previewWidth, setPreviewWidth] = useState(50);
  const [layout, setLayout] = useState('vertical'); // 'vertical', 'horizontal', 'preview'
  const [device, setDevice] = useState('desktop'); // 'desktop', 'tablet', 'mobile'
  const isResizing = useRef(false);

  // Layout control functions
  const handleLayoutChange = (newLayout) => {
    setLayout(newLayout);
    if (newLayout === 'preview') {
      setEditorWidth(0);
      setPreviewWidth(100);
    } else {
      setEditorWidth(50);
      setPreviewWidth(50);
    }
  };

  // Submit code to database
  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/playground/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });
      if (response.ok) {
        alert('Code submitted successfully!');
      }
    } catch (error) {
      console.error('Error submitting code:', error);
      alert('Failed to submit code');
    }
  };

  // Get preview width based on device
  const getPreviewWidth = () => {
    switch (device) {
      case 'mobile': return '375px';
      case 'tablet': return '768px';
      default: return '100%';
    }
  };

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
      {/* Control Bar */}
      <div className="px-4 py-2 bg-gray-800 border-b border-gray-700 flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">TwDevs Playground</h1>

        {/* Controls */}
        <div className="flex items-center gap-4">
          {/* Layout Controls */}
          <div className="flex items-center gap-2 text-gray-400">
            <button
              onClick={() => handleLayoutChange('vertical')}
              className={`p-2 rounded ${layout === 'vertical' ? 'bg-gray-700 text-white' : 'hover:text-white'}`}
            >
              <MdOutlineVerticalSplit size={20} />
            </button>
            <button
              onClick={() => handleLayoutChange('horizontal')}
              className={`p-2 rounded ${layout === 'horizontal' ? 'bg-gray-700 text-white' : 'hover:text-white'}`}
            >
              <MdOutlineHorizontalSplit size={20} />
            </button>
            <button
              onClick={() => handleLayoutChange('preview')}
              className={`p-2 rounded ${layout === 'preview' ? 'bg-gray-700 text-white' : 'hover:text-white'}`}
            >
              <IoEyeOutline size={20} />
            </button>
          </div>

          {/* Device Controls */}
          <div className="flex items-center gap-2 text-gray-400">
            <button
              onClick={() => setDevice('desktop')}
              className={`p-2 rounded ${device === 'desktop' ? 'bg-gray-700 text-white' : 'hover:text-white'}`}
            >
              <FaDesktop size={20} />
            </button>
            <button
              onClick={() => setDevice('tablet')}
              className={`p-2 rounded ${device === 'tablet' ? 'bg-gray-700 text-white' : 'hover:text-white'}`}
            >
              <FaTabletAlt size={20} />
            </button>
            <button
              onClick={() => setDevice('mobile')}
              className={`p-2 rounded ${device === 'mobile' ? 'bg-gray-700 text-white' : 'hover:text-white'}`}
            >
              <FaMobile size={20} />
            </button>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Submit Code
          </button>
        </div>
      </div>

      {/* Editor and Preview Container */}
      <div
        className={`flex ${layout === 'horizontal' ? 'flex-col' : 'flex-row'} w-full h-[calc(100vh-56px)] overflow-hidden`}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {/* Code Editor */}
        <div
          className="overflow-auto bg-gray-800"
          style={{
            width: layout === 'horizontal' ? '100%' : `${editorWidth}%`,
            height: layout === 'horizontal' ? `${editorWidth}%` : '100%',
            display: layout === 'preview' ? 'none' : 'block'
          }}
        >
          <CodeEditor code={code} setCode={setCode} />
        </div>

        {/* Resizer */}
        {layout !== 'preview' && (
          <div
            className={`${layout === 'horizontal' ? 'h-2 cursor-row-resize w-full' : 'w-2 cursor-col-resize h-full'} bg-gray-700 hover:bg-blue-500 transition-colors`}
            onMouseDown={handleMouseDown}
          />
        )}

        {/* Preview */}
        <div
          style={{
            width: layout === 'horizontal' ? '100%' : `${previewWidth}%`,
            height: layout === 'horizontal' ? `${previewWidth}%` : '100%'
          }}
          className="bg-white overflow-auto flex items-center justify-center"
        >
          <div style={{ width: getPreviewWidth() }} className="h-full transition-all duration-200">
            <iframe
              key={iframeKey}
              srcDoc={`
                <html>
                  <head>
                    <script src="https://cdn.tailwindcss.com"></script>
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
                  <body class='min-h-screen'>
                    ${code}
                  </body>
                </html>
              `}
              className="w-full h-full"
              style={{ border: 'none' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
